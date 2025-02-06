import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value; // Add refresh token check
  const userRole = request.cookies.get("role")?.value;
  const { pathname } = request.nextUrl;

  const routes = {
    guest: ["/login", "/register"], // Routes accessible to unauthenticated users
    protected: {
      common: ["/chats", "/tracking", "/requests", "/artisans", "/profile"], // Common protected routes
      artisan: ["/artisan-extra"], // Artisan-specific routes
    },
  };

  // Check if the current route is a guest route
  const isGuestRoute = routes.guest.some((route) => pathname.startsWith(route));

  // Check if the current route is a protected route
  const isProtectedRoute = [
    ...routes.protected.common,
    ...routes.protected.artisan,
  ].some((route) => pathname.startsWith(route));

  // Handle guest routes
  if (isGuestRoute) {
    // If the user is authenticated (has a refresh token), redirect them away from guest routes
    if (refreshToken) {
      return NextResponse.redirect(new URL("/tracking", request.url));
    }
    // Allow unauthenticated users to access guest routes
    return NextResponse.next();
  }

  // Handle protected routes
  if (isProtectedRoute) {
    // If there is no refresh token, redirect to login
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Handle role-based access for protected routes
    if (userRole) {
      const allowedRoutes = [
        ...routes.protected.common,
        ...(routes.protected[userRole as keyof typeof routes.protected] || []),
      ];

      const isAllowed = allowedRoutes.some((route) =>
        pathname.startsWith(route),
      );

      // If the user is not allowed to access the route, redirect them to /tracking
      if (!isAllowed) {
        return NextResponse.redirect(new URL("/tracking", request.url));
      }
    }
  }

  // Allow access to all other routes
  return NextResponse.next();
}
