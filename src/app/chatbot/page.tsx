import type { Metadata } from "next";
import { FeaturePage } from "@/components/FeaturePage";


export const metadata: Metadata = {
  title: "AI Chatbot - Whelp",
  description: "Whelp is an AI-powered chatbot that automates customer service, reducing response times and increasing satisfaction. Streamline your support with Whelp's powerful features and integrations.",
};

export default function Page() {
  return <FeaturePage slug="chatbot" />;
}
