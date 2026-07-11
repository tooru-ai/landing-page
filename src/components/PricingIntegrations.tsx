import { Container } from "@/components/Container";
import { IntegrationCard } from "@/components/IntegrationCard";
import { WButton } from "@/components/WButton";
import { ArrowRightIcon } from "@/components/icons";
import { integrationItems } from "@/data/integrations";

const previewNames = [
  "Facebook",
  "Instagram",
  "Whatsapp",
  "Telegram",
  "Twilio",
  "Shopify",
  "Stripe",
  "Line",
];

// /pricing "Explore integrations" preview: intro with Learn more button + 8 cards
export function PricingIntegrations() {
  const items = previewNames.map((n) => integrationItems.find((i) => i.name === n)!);
  return (
    <Container>
      <div className="pt-30 pb-12 max-[768px]:pt-10 max-[768px]:pb-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="cooper m-0 text-5xl leading-[64px] font-normal max-[992px]:text-[40px] max-[992px]:leading-[48px] max-[768px]:text-center max-[768px]:text-[32px] max-[768px]:leading-10">
            Explore integrations
          </h2>
          <p className="poppins mt-5 max-w-1/2 text-center text-base leading-6 text-(--subtext) max-[992px]:max-w-[85%] max-[768px]:max-w-full">
            Our integrations make it easy to work with the applications your teams already love.
          </p>
          <WButton
            variant="transparent"
            href="/integrations"
            className="mt-8 w-max"
            iconRight={<ArrowRightIcon />}
          >
            Learn more
          </WButton>
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center pb-15">
        {items.map((item) => (
          <IntegrationCard key={item.name} item={item} />
        ))}
      </div>
    </Container>
  );
}
