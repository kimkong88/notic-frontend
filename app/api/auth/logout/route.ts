import { NextRequest, NextResponse } from "next/server";

/** GET: clear auth cookies and redirect to /billing (same origin as request). */
export function GET(request: NextRequest) {
  const url = request.nextUrl;
  const redirectUrl = `${url.origin}/billing`;
  const res = NextResponse.redirect(redirectUrl);
  res.cookies.set("notic_access_token", "", { path: "/", maxAge: 0 });
  res.cookies.set("notic_refresh_token", "", { path: "/", maxAge: 0 });
  return res;
}
