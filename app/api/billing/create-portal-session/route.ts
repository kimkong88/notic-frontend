import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.getnotic.io";

/** POST: proxy to backend /billing/create-portal-session with Bearer from cookie. */
export async function POST(request: NextRequest) {
  const token = request.cookies.get("notic_access_token")?.value;
  if (!token) {
    return new NextResponse(null, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  const res = await fetch(`${API_URL}/billing/create-portal-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
