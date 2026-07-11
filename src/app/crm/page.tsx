import type { Metadata } from "next";
import { FeaturePage } from "@/components/FeaturePage";


export const metadata: Metadata = {
  title: "Omnichannel CRM Software - Whelp",
  description: "Whelp is the leading omnichannel CRM software for businesses of all sizes. Our platform provides a comprehensive suite of tools to help you manage customer relationships, automate sales processes, and streamline operations.",
};

export default function Page() {
  return <FeaturePage slug="crm" />;
}
