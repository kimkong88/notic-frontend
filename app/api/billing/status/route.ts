import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.notelight.app";

/** GET: proxy to backend /billing/status with Bearer from cookie. */
export async function GET(request: NextRequest) {
  const token = request.cookies.get("notic_access_token")?.value;
  if (!token) {
    return new NextResponse(null, { status: 401 });
  }
  const res = await fetch(`${API_URL}/billing/status`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
