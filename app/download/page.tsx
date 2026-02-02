import { redirect } from 'next/navigation';

// Set NEXT_PUBLIC_CHROME_STORE_URL when your extension is published, or redirect to homepage
const CHROME_STORE_URL =
  process.env.NEXT_PUBLIC_CHROME_STORE_URL || 'https://getnotic.io';

export default function DownloadPage() {
  redirect(CHROME_STORE_URL);
}
