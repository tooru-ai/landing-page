import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { IntegrationsDirectory } from "@/components/IntegrationsDirectory";

export const metadata: Metadata = {
  title: "Integrations - Whelp",
  description:
    "Streamline your workflow with Whelp's powerful integrations. Connect to top apps like Twilio, Stripe, and Whatsapp more for improved efficiency.",
};

export default function Page() {
  return (
    <main>
      <IntegrationsDirectory />
      <FaqSection />
    </main>
  );
}
