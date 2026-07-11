import type { Metadata } from "next";
import { FeaturePage } from "@/components/FeaturePage";


export const metadata: Metadata = {
  title: "Inbox - Whelp",
  description: "Streamline your customer communication with Whelp omnichannel inbox. Consolidate phone, email, chat and messaging app in one place for quick customer response.",
};

export default function Page() {
  return <FeaturePage slug="inbox" />;
}
