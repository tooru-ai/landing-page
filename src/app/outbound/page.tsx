import type { Metadata } from "next";
import { FeaturePage } from "@/components/FeaturePage";


export const metadata: Metadata = {
  title: "Outbound Marketing - Whelp",
  description: "Outbound Marketing helps you automate your marketing efforts and get the most out of your campaigns. We provide a comprehensive suite of tools to help you create, manage, and optimize campaigns for maximum ROI.",
};

export default function Page() {
  return <FeaturePage slug="outbound" />;
}
