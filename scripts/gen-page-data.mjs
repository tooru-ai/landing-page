// Generates src/data/feature-pages.ts from docs/research/whelp.co/pages/pages-data.json
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const data = JSON.parse(readFileSync("docs/research/whelp.co/pages/pages-data.json", "utf8"));
const faq = readFileSync("docs/research/whelp.co/faq-raw.txt", "utf8");

// wrapper class -> tailwind padding/margin utilities (from origin CSS, 768px variants included)
const WRAPPER = {
  Assign: "mb-10",
  EmailCompose: "pt-30! max-[768px]:pt-15!",
  Customize: "mb-10",
  EmailInbox: "pb-30! max-[768px]:pb-15!",
  UserDetails: "mt-10",
  AverageHandlingTime: "pt-30! max-[768px]:pt-15!",
  FirstResponseTime: "pb-30! max-[768px]:pb-15!",
  ChatbotReports: "mt-5",
  BulkMessages: "pt-30! max-[768px]:pt-15!",
  CampaignReports: "pb-30! max-[768px]:pb-15!",
  BotFlow1: "pt-30! max-[768px]:pt-15!",
  BotReports: "pb-30! max-[768px]:pb-15!",
};

const faqPairs = [...faq.matchAll(/\{q:"([^"]+)",a:(?:"([^"]+)"|'([^']+)')\}/g)].map((m) => ({
  q: m[1],
  a: m[2] ?? m[3],
}));

// origin CSS gives some text halves non-default padding
const TEXTPAD = {
  EmailCompose: "pl-15",
};
// on /inbox the OmniChannel band sits after the "Saved Responses" section (index 6)
const OMNI_AFTER = { inbox: 6 };

const usedIcons = new Set();
let out = `// AUTO-GENERATED from docs/research/whelp.co/pages/pages-data.json by scripts/gen-page-data.mjs\n`;

let body = "";
body += `\nexport interface PageSection {\n  tag: "h2" | "h3";\n  heading: string;\n  sub: string;\n  image: { src: string; width: number; height: number; alt: string };\n  imageSide: "left" | "right";\n  wrapperClassName?: string;\n  textClassName?: string;\n}\n\nexport interface PageFeatureCard {\n  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;\n  iconBg: string;\n  iconColor: string;\n  title: string;\n  description: string;\n}\n\nexport interface FeaturePageData {\n  slug: string;\n  hero: { heading: string; sub: string; image: { src: string; width: number; height: number; alt: string }; imageSide: "left" | "right" };\n  sections: PageSection[];\n  features: PageFeatureCard[];\n  /* index in sections after which the OmniChannel band renders */\n  omniAfterIndex?: number;\n}\n\nexport const faqItems: { q: string; a: string }[] = ${JSON.stringify(
  // preserve the on-page order (as they appear in SSR)
  [
    "How does Whelp work?",
    "What are the security and privacy terms for Whelp?",
    "Are there any technical requirements to use Whelp?",
    "Is installation or downloading required?",
    "How many conversations does my subscription cover?",
    "Is it possible to cancel my subscription at any time?",
    "Are volume discounts available for large businesses?",
  ].map((q) => faqPairs.find((p) => p.q === q)),
  null,
  2
)};\n`;

const pages = [];
for (const [slug, page] of Object.entries(data)) {
  const hero = page.sections.find((s) => s.hero);
  const rest = page.sections.filter((s) => !s.hero);
  const sec = (s) =>
    `{ tag: "${s.tag === "h2" ? "h2" : "h3"}", heading: ${JSON.stringify(s.heading)}, sub: ${JSON.stringify(s.sub)}, image: { src: "/images/pages/${s.image.file}", width: ${s.image.w}, height: ${s.image.h}, alt: ${JSON.stringify(s.image.alt)} }, imageSide: "${s.imageSide}"${
      WRAPPER[s.wrapperCls] ? `, wrapperClassName: "${WRAPPER[s.wrapperCls]}"` : ""
    }${TEXTPAD[s.wrapperCls] ? `, textClassName: "${TEXTPAD[s.wrapperCls]}"` : ""} }`;
  const feats = page.features
    .map((f) => {
      usedIcons.add(f.icon);
      return `{ icon: ${f.icon}, iconBg: "${f.iconBg}", iconColor: "${f.iconColor}", title: ${JSON.stringify(f.title)}, description: ${JSON.stringify(f.content)} }`;
    })
    .join(",\n      ");
  pages.push(`  {
    slug: "${slug}",
    hero: { heading: ${JSON.stringify(hero.heading)}, sub: ${JSON.stringify(hero.sub)}, image: { src: "/images/pages/${hero.image.file}", width: ${hero.image.w}, height: ${hero.image.h}, alt: ${JSON.stringify(hero.image.alt)} }, imageSide: "${hero.imageSide}" },
    sections: [\n      ${rest.map(sec).join(",\n      ")}\n    ],
    features: [\n      ${feats}\n    ],${page.omniChannels ? `\n    omniAfterIndex: ${OMNI_AFTER[slug] ?? rest.length - 1},` : ""}
  }`);
}

body += `\nexport const featurePages: FeaturePageData[] = [\n${pages.join(",\n")}\n];\n`;

out += `import { ${[...usedIcons].sort((a, b) => +a.slice(11) - +b.slice(11)).join(", ")} } from "@/components/feature-icons";\n`;
out += body;

mkdirSync("src/data", { recursive: true });
writeFileSync("src/data/feature-pages.ts", out);
console.log("wrote src/data/feature-pages.ts,", pages.length, "pages, icons used:", usedIcons.size);
