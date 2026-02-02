import { NextResponse } from "next/server";

const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

export function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    "http://localhost:3000";

  if (!clientId) {
    return NextResponse.json(
      { error: "Google OAuth not configured" },
      { status: 500 }
    );
  }

  const redirectUri = `${baseUrl}/api/auth/callback`;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
  });

  return NextResponse.redirect(`${GOOGLE_AUTH_URL}?${params.toString()}`);
}
