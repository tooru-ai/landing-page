import type { Metadata } from "next";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Request a Demo - Whelp",
  description: "Request a demo now to experience efficient communication and personalized service.",
};

export default function Page() {
  return (
    <main>
      <DemoForm />
    </main>
  );
}
