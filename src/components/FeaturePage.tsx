"use client";

import { Container } from "@/components/Container";
import { FaqSection } from "@/components/FaqSection";
import { FeaturePageHero } from "@/components/FeaturePageHero";
import { FeatureSection } from "@/components/FeatureSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { OmniChannelSection } from "@/components/OmniChannelSection";
import { featurePages } from "@/data/feature-pages";

// Template shared by /inbox /crm /reporting /chatbot /outbound.
// Client component so the icon components in the data module never cross
// the server -> client serialization boundary.
export function FeaturePage({ slug }: { slug: string }) {
  const data = featurePages.find((p) => p.slug === slug);
  if (!data) return null;
  const omniAt = data.omniAfterIndex;
  const before = omniAt === undefined ? data.sections : data.sections.slice(0, omniAt + 1);
  const after = omniAt === undefined ? [] : data.sections.slice(omniAt + 1);
  const renderSection = (section: (typeof data.sections)[number]) => (
    <FeatureSection
      key={section.heading}
      heading={section.heading}
      headingTag={section.tag}
      body={section.sub}
      image={section.image}
      imageSide={section.imageSide}
      wrapperClassName={section.wrapperClassName}
      textClassName={section.textClassName}
    />
  );
  return (
    <main>
      <Container>
        <FeaturePageHero heading={data.hero.heading} sub={data.hero.sub} image={data.hero.image} />
        {before.map(renderSection)}
      </Container>
      {omniAt !== undefined ? <OmniChannelSection /> : null}
      {after.length ? <Container>{after.map(renderSection)}</Container> : null}
      <FeaturesGrid items={data.features} disableMarginBottom />
      <FaqSection />
    </main>
  );
}
