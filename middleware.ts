import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });
  // console.log(token, "---");
  if (!token?.accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/transaction",
    "/account",
    "/investment",
    "/credit-cards",
    "/loan",
    "/service",
    "/settings/:path*",
  ],
};
