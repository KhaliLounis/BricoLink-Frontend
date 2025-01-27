import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
 
  // Allow access to all other routes
  return NextResponse.next();
}
