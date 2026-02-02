import { NextRequest, NextResponse } from "next/server";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.getnotic.io";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    "http://localhost:3000";
  const redirectUri = `${baseUrl}/api/auth/callback`;

  if (!code) {
    return NextResponse.redirect(`${baseUrl}/billing?error=no_code`);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.redirect(`${baseUrl}/billing?error=config`);
  }

  const tokenRes = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.redirect(`${baseUrl}/billing?error=token_exchange`);
  }

  const tokenData = (await tokenRes.json()) as { access_token?: string };
  const accessToken = tokenData.access_token;

  if (!accessToken) {
    return NextResponse.redirect(`${baseUrl}/billing?error=no_access_token`);
  }

  const authRes = await fetch(`${API_URL}/auth/authenticate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: accessToken, provider: "google" }),
  });

  if (!authRes.ok) {
    return NextResponse.redirect(`${baseUrl}/billing?error=auth_failed`);
  }

  const authData = (await authRes.json()) as {
    tokens?: { access?: { token?: string }; refresh?: { token?: string } };
  };
  const jwtAccess = authData?.tokens?.access?.token;
  const jwtRefresh = authData?.tokens?.refresh?.token;

  if (!jwtAccess) {
    return NextResponse.redirect(`${baseUrl}/billing?error=no_jwt`);
  }

  const isSecure = baseUrl.startsWith("https://");
  const cookieOptions = {
    httpOnly: true,
    secure: isSecure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  };

  const res = NextResponse.redirect(`${baseUrl}/billing`);
  res.cookies.set("notic_access_token", jwtAccess, cookieOptions);
  if (jwtRefresh) {
    res.cookies.set("notic_refresh_token", jwtRefresh, { ...cookieOptions, maxAge: 60 * 60 * 24 * 30 });
  }
  return res;
}
