import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const userRole = request.cookies.get("role")?.value;
  const { pathname } = request.nextUrl;

  const routes = {
    guest: ["/login", "/register", "/"],
    protected: {
      common: ["/chats", "/tracking", "/requests, /artisans", "/profile"],
      artisan: ["/artisan-extra"],
    },
  };

  // Redirect unauthenticated users trying to access protected routes
  if (!accessToken) {
    // Allow unauthenticated users to access public routes
    if (routes.guest.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    // Redirect unauthenticated users from protected routes
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Redirect logged-in users away from guest routes
  if (routes.guest.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/tracking", request.url));
  }

  // Handle role-based redirection for protected routes
  if (userRole) {
    const allowedRoutes =
      routes.protected[userRole as keyof typeof routes.protected] || [];
    const isAllowed = allowedRoutes.some((route) => pathname.startsWith(route));

    if (!isAllowed) {
      return NextResponse.redirect(new URL("/tracking", request.url));
    }
  }

  return NextResponse.next();
}
