import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Notic - The note that floats over every tab';
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
          {/* Logo Icon – same Lucide Layers (top filled) as components/Logo.tsx */}
          <div
            style={{
              width: '96px',
              height: '96px',
              background: '#4f46e5',
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
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          {/* Logo Text */}
          <span
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#18181b',
              letterSpacing: '-0.02em',
              lineHeight: '1',
            }}
          >
            Notic
          </span>
        </div>
        {/* Subheading */}
        <span
          style={{
            fontSize: '42px',
            fontWeight: 600,
            color: '#71717a',
            letterSpacing: '-0.01em',
            lineHeight: '1.2',
          }}
        >
          The note that floats over every tab
        </span>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
