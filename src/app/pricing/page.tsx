import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { PricingIntegrations } from "@/components/PricingIntegrations";
import { PricingPlans } from "@/components/PricingPlans";
import { QuoteSection } from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "Customer Support Platform Pricing - Whelp",
  description:
    "Get the customer support platform you need with Whelp's pricing plans. Choose from our Basic, Pro, and Enterprise plans to get the features you need for your business.",
};

export default function Page() {
  return (
    <main>
      <PricingPlans />
      <QuoteSection className="mb-10 max-[768px]:mb-5" />
      <PricingIntegrations />
      <FaqSection />
    </main>
  );
}
