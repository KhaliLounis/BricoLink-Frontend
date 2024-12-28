import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/chats", "/friend-requests", "/users"];
  const guestRoutes = ["/login", "/register"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isGuestRoute = guestRoutes.some((route) => pathname.startsWith(route));

  if (isProtectedRoute) {
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    else if (!accessToken) {
      return NextResponse.next();
    }
  }

  if (isGuestRoute && accessToken) {
    return NextResponse.redirect(new URL("/chats", request.url));
  }

  return NextResponse.next();
}
