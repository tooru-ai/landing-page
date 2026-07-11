"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import {
  ChatLinesIcon,
  InboxIcon,
  IntegrationsIcon,
  ReportingIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@/components/icons";
import type { FeatureCard } from "@/types/content";

const cards: FeatureCard[] = [
  {
    icon: ShieldCheckIcon,
    iconBg: "var(--wh-green-5)",
    iconColor: "var(--wh-green-90)",
    title: "Security first",
    description:
      "Advanced encryption and secure access controls protect customer data on this platform.",
  },
  {
    icon: UsersIcon,
    iconBg: "var(--wh-purple-5)",
    iconColor: "var(--wh-purple-90)",
    title: "Team collaboration",
    description:
      "Easily collaborate and communicate with both team members and customers across various channels with our platform.",
  },
  {
    icon: InboxIcon,
    iconBg: "var(--wh-blue-5)",
    iconColor: "var(--wh-blue-90)",
    title: "Omnichannel support",
    description:
      "Whelp allows businesses to reach customers through various channels, ensuring that they can communicate with customers wherever they are.",
  },
  {
    icon: ChatLinesIcon,
    iconBg: "var(--wh-yellow-5)",
    iconColor: "var(--wh-yellow-90)",
    title: "AI powered automation",
    description:
      "The chatbot on our platform automates up to 60% of customer inquiries, freeing up agents to focus on more complex issues.",
  },
  {
    icon: ReportingIcon,
    iconBg: "var(--wh-pink-5)",
    iconColor: "var(--wh-pink-90)",
    title: "Analytics and reporting",
    description:
      "Analytics and reporting tools on our platform help businesses track and analyze their performance and customer interactions.",
  },
  {
    icon: IntegrationsIcon,
    iconBg: "var(--wh-orange-5)",
    iconColor: "var(--wh-orange-90)",
    title: "Integration capabilities",
    description:
      "Our platform easily integrates with a wide range of other tools and platforms, streamlining integration with existing workflows.",
  },
];

// whelp.co Features grid: 6 cards, staggered fadeIn (0.25s..1.5s linear forwards) on first view
export function FeaturesGrid({
  items = cards,
  disableMarginBottom = false,
}: {
  items?: FeatureCard[];
  /* subpages use Features_disableMarginBottom (margin-bottom: 0) */
  disableMarginBottom?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <div
        ref={ref}
        className={cn(
          "my-10 grid grid-cols-3 gap-6 overflow-auto py-20 [-ms-overflow-style:none] [scrollbar-width:none] max-[768px]:my-5 max-[768px]:flex max-[768px]:gap-0 max-[768px]:py-10 [&::-webkit-scrollbar]:hidden",
          disableMarginBottom && "mb-0! max-[768px]:mb-0!"
        )}
      >
        {items.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              style={
                visible
                  ? { animation: `feature-fade-in ${0.25 * (i + 1)}s linear forwards` }
                  : undefined
              }
              className={cn(
                "flex min-h-65 shrink-0 flex-col justify-start rounded-[20px] border-2 border-black bg-white p-8 opacity-0 max-[768px]:mr-5 max-[768px]:min-h-72 max-[768px]:max-w-72 max-[768px]:p-6"
              )}
            >
              <div
                className="flex h-13 w-19 shrink-0 items-center justify-center rounded-[60px]"
                style={{ backgroundColor: card.iconBg, color: card.iconColor }}
              >
                <Icon width={32} height={32} />
              </div>
              <span className="mt-5 text-xl leading-[normal] font-medium">{card.title}</span>
              <span className="mt-4 text-base leading-[normal] text-(--subtext) max-[768px]:text-sm">
                {card.description}
              </span>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
