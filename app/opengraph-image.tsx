import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Floatify - Floating YouTube Player';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

async function loadGoogleFont(font: string, weight: number) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}:wght@${weight}&display=swap`;
    const css = await fetch(url).then((res) => res.text());
    // Match font URL from CSS - handle both url() and url('') formats
    const fontUrlMatch = css.match(/src:\s*url\(['"]?([^'")]+)['"]?\)/);
    if (fontUrlMatch && fontUrlMatch[1]) {
      let fontUrl = fontUrlMatch[1];
      // Handle relative URLs
      if (fontUrl.startsWith('//')) {
        fontUrl = 'https:' + fontUrl;
      } else if (fontUrl.startsWith('/')) {
        fontUrl = 'https://fonts.gstatic.com' + fontUrl;
      }
      const response = await fetch(fontUrl);
      if (response.ok) {
        return await response.arrayBuffer();
      }
    }
  } catch {
    // Silently fail and use fallback font
  }
  return null;
}

export default async function Image() {
  // Load Plus Jakarta Sans fonts (600 and 700 weights)
  const [font600, font700] = await Promise.all([
    loadGoogleFont('Plus Jakarta Sans', 600),
    loadGoogleFont('Plus Jakarta Sans', 700),
  ]);

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    style: 'normal';
    weight: 600 | 700;
  }> = [];
  if (font600) {
    fonts.push({
      name: 'Plus Jakarta Sans',
      data: font600,
      style: 'normal' as const,
      weight: 600 as const,
    });
  }
  if (font700) {
    fonts.push({
      name: 'Plus Jakarta Sans',
      data: font700,
      style: 'normal' as const,
      weight: 700 as const,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: fonts.length > 0 ? 'Plus Jakarta Sans' : 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          {/* Logo Icon */}
          <div
            style={{
              width: '96px',
              height: '96px',
              background: '#E63946',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="white" strokeWidth="2.5" fill="none"/>
              <path d="M10 9L15 12L10 15V9Z" fill="white"/>
            </svg>
          </div>
          {/* Logo Text */}
          <span
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#0B0B0C',
              letterSpacing: '-0.02em',
              lineHeight: '1',
            }}
          >
            Floatify
          </span>
        </div>
        {/* Subheading */}
        <span
          style={{
            fontSize: '42px',
            fontWeight: 600,
            color: '#666666',
            letterSpacing: '-0.01em',
            lineHeight: '1.2',
          }}
        >
          Floating YouTube Player
        </span>
      </div>
    ),
    {
      ...size,
      fonts: fonts as any,
    }
  );
}
