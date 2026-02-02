import { NextRequest, NextResponse } from "next/server";

/** GET: returns 200 if user has a valid session (notic_access_token cookie), 401 otherwise. */
export function GET(request: NextRequest) {
  const token = request.cookies.get("notic_access_token")?.value;
  if (!token) {
    return new NextResponse(null, { status: 401 });
  }
  return new NextResponse(null, { status: 200 });
}
