"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { WButton } from "@/components/WButton";
import { ChevronDownIcon } from "@/components/icons";

interface Plan {
  type: string;
  subtext: string;
  priceMonth: string;
  priceYear: string;
  per?: string;
  buttonType: "black" | "transparent";
  buttonText: string;
  buttonHref: string;
  popular?: boolean;
  bg: string;
  items: string[];
}

const plans: Plan[] = [
  {
    type: "Free",
    subtext: "Works perfect for small teams and startups.",
    priceMonth: "$0",
    priceYear: "$0",
    per: "/ Month",
    buttonType: "transparent",
    buttonText: "Book a Demo",
    buttonHref: "/request-demo",
    bg: "var(--wh-white)",
    items: [
      "One seat",
      "Live Chat widget for website",
      "Unified inbox",
      "Unlimites conversations",
      "Mobile aplications (IOS / Android)",
      "Contacts",
    ],
  },
  {
    type: "Standard",
    subtext: "Great for small and medium teams.",
    priceMonth: "$29",
    priceYear: "$23",
    per: "Seat / Month",
    buttonType: "black",
    buttonText: "Try for free",
    buttonHref: "https://web.whelp.co/signup",
    popular: true,
    bg: "var(--wh-blue-5)",
    items: [
      "Everything in the Free package",
      "WhatsApp Business API integration",
      "Twilio integration(sms and calls)",
      "Email integration",
      "Instagram Direct integration",
      "Facebook Messenger integration",
      "Telegram bot integration",
      "Flow Base Chatbot",
      "Advanced reportings",
      "Customer Satisfaction Survey",
      "Email Support",
    ],
  },
  {
    type: "Advanced",
    subtext: "Great for medium and large teams.",
    priceMonth: "$79",
    priceYear: "$63",
    per: "Seat / Month",
    buttonType: "black",
    buttonText: "Try for free",
    buttonHref: "https://web.whelp.co/signup",
    bg: "var(--wh-white)",
    items: [
      "Everything in the Standard package",
      "Instagram comments integration",
      "Facebook comments integration",
      "Whelp AI",
      "Dynamic Chatbot",
      "Dedicated Account Managers",
      "Mobile chat SDKs",
      "Broadcast (Mass Messaging on WhatsApp* / SMS / Telegram / Email)",
      "24/7 support(Live,Email, Chat)",
      "Contact importing",
      "X integration",
      "SalesForce integration",
      "SMS integration",
      "Amazon Connect integration",
      "Stripe integration",
      "Line integration",
      "Call integration",
      "Your own CRM integrations",
      "Viber integration",
    ],
  },
  {
    type: "Premium",
    subtext: "Great for medium and large enterprises.",
    priceMonth: "Talk to us",
    priceYear: "Talk to us",
    buttonType: "black",
    buttonText: "Ask for a demo",
    buttonHref: "/request-demo",
    bg: "var(--wh-white)",
    items: [
      "On-prems integration",
      "Whitelabel",
      "Custom features",
      "Unique pricing",
      "Personalized SLA",
      "Dedicated onboarding",
    ],
  },
];

const VISIBLE_OPTIONS = 7;

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m5.833 13.55 5.717 6.283L22.167 8.166" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function PlanOption({ text }: { text: string }) {
  // origin bolds cross-references like "Everything in the Free package"
  const bold = text.match(/^Everything in the (\w+) package$/);
  return (
    <div className="mt-5 flex items-start">
      <div className="mr-2 flex shrink-0 items-center justify-center text-(--wh-green-60)">
        <CheckIcon />
      </div>
      <span className="poppins text-sm leading-5 font-normal text-wh-steel-70">
        {bold ? (
          <>
            Everything in the <span className="font-medium text-black">{bold[1]}</span> package
          </>
        ) : (
          text
        )}
      </span>
    </div>
  );
}

function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? plan.items : plan.items.slice(0, VISIBLE_OPTIONS);
  const price = annual ? plan.priceYear : plan.priceMonth;

  return (
    <div
      className="relative flex w-full flex-col rounded-2xl border-2 border-black py-6"
      style={{ backgroundColor: plan.bg }}
    >
      {plan.popular ? (
        <span className="poppins absolute -top-4 right-3.5 flex h-8 flex-row items-center justify-center rounded-3xl bg-wh-purple-5 px-3 py-2 text-sm font-medium text-(--wh-purple-70)">
          Most popular
        </span>
      ) : null}
      <span className="poppins px-6 text-xl leading-[normal]">{plan.type}</span>
      <span className="poppins mt-3 px-6 text-wh-steel-70">{plan.subtext}</span>
      <div className="mt-8 ml-6 flex items-end leading-12">
        <span className="poppins text-4xl font-medium">{price}</span>
        {plan.per ? (
          <span className="poppins ml-2 -translate-y-1 text-sm leading-6 text-wh-steel-70">
            {plan.per}
          </span>
        ) : null}
      </div>
      <div className="px-6">
        <WButton variant={plan.buttonType} href={plan.buttonHref} className="mt-8 w-full">
          {plan.buttonText}
        </WButton>
      </div>
      <div className="mt-5 px-6">
        {shown.map((item) => (
          <PlanOption key={item} text={item} />
        ))}
        {plan.items.length > VISIBLE_OPTIONS && !expanded ? (
          <div
            onClick={() => setExpanded(true)}
            className="poppins mt-5 flex cursor-pointer items-center justify-center text-center font-medium"
          >
            Show More
            <span className="ml-2 flex items-center">
              <ChevronDownIcon width={12} height={12} />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// whelp.co /pricing: hero heading + monthly/annual tabs + 4 plan cards + WhatsApp alert + bottom items
export function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="flex w-full flex-col items-center pt-30 pb-30 max-[768px]:pt-15 max-[768px]:pb-15">
      <Container>
        <h1 className="cooper m-0 text-center text-[56px] leading-[68px] font-normal max-[992px]:text-[40px] max-[992px]:leading-11">
          Pick a plan. Grow faster with Whelp.
        </h1>
        <p className="poppins mt-5 text-center text-base leading-6 text-(--subtext)">
          Get started in minutes. No downloads, no software installation.
        </p>
      </Container>
      <div className="relative mx-auto mt-20 mb-10 flex w-max rounded-[60px] border border-black/6 bg-white p-2 max-[768px]:mt-10 max-[768px]:mb-5">
        <div
          onClick={() => setAnnual(false)}
          className={cn(
            "cursor-pointer rounded-[60px] bg-white px-4 py-2 hover:bg-wh-neutral-0",
            !annual && "bg-wh-blue-5 hover:bg-wh-blue-5"
          )}
        >
          <p
            className={cn(
              "poppins m-0 text-base font-medium text-wh-steel-60",
              !annual && "text-(--wh-blue-70)"
            )}
          >
            Monthly
          </p>
        </div>
        <div
          onClick={() => setAnnual(true)}
          className={cn(
            "cursor-pointer rounded-[60px] bg-white px-4 py-2 hover:bg-wh-neutral-0",
            annual && "bg-wh-blue-5 hover:bg-wh-blue-5"
          )}
        >
          <p
            className={cn(
              "poppins m-0 text-base font-medium text-wh-steel-60",
              annual && "text-(--wh-blue-70)"
            )}
          >
            Annually
          </p>
          <span className="poppins absolute -top-[13px] flex h-6 flex-row items-center justify-center rounded-3xl bg-wh-green-5 px-2 py-1 text-xs font-medium text-(--wh-green-70)">
            Save 20%
          </span>
        </div>
      </div>
      <Container>
        <div className="grid w-full grid-cols-4 gap-[18px] max-[992px]:flex max-[992px]:flex-col">
          {plans.map((plan) => (
            <PlanCard key={plan.type} plan={plan} annual={annual} />
          ))}
        </div>
        <div className="mt-10 flex w-full rounded-[60px] border border-black/6 bg-[#f5f4ef] px-6 py-4 max-[768px]:mt-5 max-[768px]:rounded-2xl">
          <span className="poppins text-sm leading-5 font-normal text-wh-steel-70">
            Businesses using the WhatsApp Business Platform are charged per conversation and
            monthly, these costs are not included.{" "}
            <a
              href="https://developers.facebook.com/docs/whatsapp/pricing/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Learn more.
            </a>
          </span>
        </div>
        <div className="mt-10 mb-10 grid grid-cols-2 gap-[18px] max-[768px]:grid-cols-1">
          <div className="flex min-h-[230px] w-full flex-col items-center justify-center rounded-[20px] border-2 border-black bg-white px-8 py-12 max-[768px]:rounded-2xl max-[768px]:px-5 max-[768px]:py-10">
            <h4 className="cooper m-0 text-[32px] leading-11 font-normal">For Startups</h4>
            <p className="poppins m-0 mt-5 text-center text-base text-wh-steel-70 max-[768px]:text-sm">
              Our Startups pricing plan is designed for growing businesses with limited resources.
              Get access to all the features you need to connect with your customers and scale your
              business at an affordable price.
            </p>
            <WButton variant="black" href="/request-demo" className="mt-8 w-max">
              Request demo
            </WButton>
          </div>
          <div className="flex min-h-[230px] w-full flex-col items-center justify-center rounded-[20px] border-2 border-black bg-white px-8 py-12 max-[768px]:rounded-2xl max-[768px]:px-5 max-[768px]:py-10">
            <h4 className="cooper m-0 text-[32px] leading-11 font-normal">Enterprise</h4>
            <p className="poppins m-0 mt-5 text-center text-base text-wh-steel-70 max-[768px]:text-sm">
              Tailored for large organizations with high volume communication needs, our Enterprise
              plan offers advanced features and dedicated support to meet the demands of your
              business
            </p>
            <WButton variant="black" href="/request-demo" className="mt-8 w-max">
              Request demo
            </WButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
