import type { Metadata } from "next";
import { FeaturePage } from "@/components/FeaturePage";


export const metadata: Metadata = {
  title: "Customer Support Reporting - Whelp",
  description: "Track every call, chat, and email so you can stay on top of customer issues and provide better service. Keep your team informed with up-to-date reports.",
};

export default function Page() {
  return <FeaturePage slug="reporting" />;
}
