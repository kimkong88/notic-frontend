import { redirect } from 'next/navigation';

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/floatify-floating-player/mhmhiofcilefnelpkeceheilccmgjgoh';

export default function DownloadPage() {
  redirect(CHROME_STORE_URL);
}
