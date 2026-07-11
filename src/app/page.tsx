import { Container } from "@/components/Container";
import { FeatureSection } from "@/components/FeatureSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Hero } from "@/components/Hero";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyWhelp } from "@/components/WhyWhelp";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <FeatureSection
          heading="Streamline Your Workflow with a CRM Solution"
          headingTag="h2"
          body="Our platform simplifies the process of managing and responding to customer inquiries and concerns by consolidating all of their interactions and data in one place."
          href="/crm"
          image={{ src: "/images/sections/crm.png", width: 1176, height: 976, alt: "CRM background" }}
          imageSide="right"
        />
        <FeatureSection
          heading="Consolidate Your Customer Conversations in One Inbox"
          headingTag="h3"
          body="A single inbox allows you to combine all of your phone, email, chat, and messaging app conversations in one location, improving your efficiency and customer satisfaction."
          href="/inbox"
          image={{ src: "/images/sections/inbox.png", width: 1176, height: 1016, alt: "Inbox background" }}
          imageSide="left"
        />
        <FeatureSection
          heading="Analyze Your Company's Performance with Advanced Reporting"
          headingTag="h2"
          body="Advanced reporting provides insights into your company's performance over any time range, helping you optimize your business operations."
          href="/reporting"
          image={{ src: "/images/sections/reports.png", width: 1176, height: 1040, alt: "Reports background" }}
          imageSide="right"
          wrapperClassName="pb-30! max-[768px]:pb-15!"
        />
      </Container>
      <QuoteSection />
      <Container>
        <FeatureSection
          heading="Customize Your Communication Efforts"
          headingTag="h3"
          body="Whelp allows you to easily customize and automate your communication campaigns, sending bulk messages via WhatsApp, Telegram, Email, and Facebook Messenger."
          href="/outbound"
          image={{ src: "/images/sections/outbound.png", width: 1176, height: 880, alt: "Outbound background" }}
          imageSide="left"
          wrapperClassName="pt-30! max-[768px]:pt-15!"
        />
        <FeatureSection
          heading="Design Unique Chatbots with Drag and Drop"
          headingTag="h2"
          body="The chatbot builder on this platform makes it easy for you to design and deploy chatbots that can provide your customers with 24/7 service and quick responses to their inquiries and concerns."
          href="/chatbot"
          image={{ src: "/images/sections/chatbot.png", width: 1224, height: 848, alt: "Chatbot background" }}
          imageSide="right"
        />
      </Container>
      <WhyWhelp />
      <SolutionsSection />
      <FeaturesGrid />
      <IntegrationsSection />
    </main>
  );
}
