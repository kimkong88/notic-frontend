import { redirect } from "next/navigation";
import { APP_URL } from "@/lib/site";

export const metadata = {
    title: "Download Notic",
    description: "Notic – the note that floats over every tab.",
};

/** Extension is hidden for now; parity with cloud. Send traffic to the app. */
export default function DownloadPage() {
    redirect(APP_URL);
}
