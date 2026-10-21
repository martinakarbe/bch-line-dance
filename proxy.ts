import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "./lib/session";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/intern/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.redirect(new URL("/intern/login", request.url), 303);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/intern/:path*",
};
