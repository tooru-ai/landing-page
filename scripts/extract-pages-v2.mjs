// v2: emits complete page data JSON (hero, dualgrid sections with image side,
// feature cards with icon svg, FAQ questions, omni-channel icons) for feature pages.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const PAGES = ["inbox", "crm", "reporting", "chatbot", "outbound"];

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();

const iconMap = new Map(); // svgHash -> {name, svg}
let iconCount = 0;

function iconFor(svg) {
  const norm = svg.replace(/\s+/g, " ");
  const hash = createHash("md5").update(norm).digest("hex").slice(0, 8);
  if (!iconMap.has(hash)) iconMap.set(hash, { name: `FeatureIcon${iconCount++}`, svg: norm });
  return iconMap.get(hash).name;
}

const all = {};

for (const page of PAGES) {
  const html = readFileSync(`docs/research/whelp.co/pages/${page}.html`, "utf8");
  const body = html.slice(html.indexOf("Navbar_wrapper"));
  const data = { sections: [], features: [], faq: [] };

  // ---- dualgrid sections (hero is the first, has Header_hero) ----
  const dgRe = /<div style="([^"]*)" class="(DualGrid_wrapper[^"]*)">([\s\S]*?)(?=<div style="[^"]*" class="DualGrid_wrapper|<div class="(?:Footer_topWrapper|OmniChannel_wrapper|ContainerOnlyDesktop)|<div\s+class="Container_container__cIsL6 ContainerOnlyDesktop)/g;
  let m;
  while ((m = dgRe.exec(body))) {
    const [, , cls, inner] = m;
    const sec = {};
    const h = inner.match(/<(h[1-6])[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/h[1-6]>/);
    if (!h) continue;
    sec.tag = h[1];
    sec.hero = /Header_hero/.test(h[2]);
    sec.heading = decode(h[3].replace(/<[^>]+>/g, ""));
    const p = inner.match(/<p class="[^"]*Text_subtext[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    sec.sub = p ? decode(p[1].replace(/<[^>]+>/g, "")) : null;
    const img = inner.match(/<img[^>]*alt="([^"]*)"[^>]*src="[^"]*url=([^&"]+)[^"]*"[^>]*width="(\d+)"[^>]*height="(\d+)"/);
    if (img) {
      sec.image = {
        file: decodeURIComponent(img[2]).split("/").pop(),
        alt: decode(img[1]),
        w: +img[3],
        h: +img[4],
      };
    }
    // image side: does the first (left) half contain the img?
    const leftHalf = inner.split(/class="DualGrid_right/)[0];
    sec.imageSide = /<img/.test(leftHalf) ? "left" : "right";
    // wrapper-specific vertical padding markers
    sec.wrapperCls = (cls.match(/ (\w+)_wrapper__/) || [])[1] || null;
    data.sections.push(sec);
  }

  // ---- features cards ----
  const fRe = /<div class="Features_iconWrapper__\w+" style="background-color:([^;]+);color:([^"]+)"><div class="Icon_icon__\w+">(<svg[\s\S]*?<\/svg>)<\/div><\/div><span class="Features_title__\w+">([\s\S]*?)<\/span><span class="Features_content__\w+">([\s\S]*?)<\/span>/g;
  while ((m = fRe.exec(body))) {
    data.features.push({ iconBg: m[1], iconColor: m[2], icon: iconFor(m[3]), title: decode(m[4]), content: decode(m[5]) });
  }

  // ---- FAQ questions ----
  const qRe = /FAQ_text__\w+"[^>]*>\s*([\s\S]*?)\s*<\/p>/g;
  while ((m = qRe.exec(body))) data.faq.push(decode(m[1].replace(/<[^>]+>/g, "")));

  // ---- omni channel icons (unique, in order) ----
  if (body.includes("OmniChannel_")) {
    const icons = [...body.matchAll(/OmniChannel_image__\w+"\s+src="\/_next\/static\/media\/([^"]+)"/g)].map((x) => x[1]);
    data.omniChannels = [...new Set(icons)];
  }

  all[page] = data;
  console.log(page, "sections:", data.sections.length, "features:", data.features.length, "faq:", data.faq.length, "omni:", data.omniChannels?.length ?? 0);
}

writeFileSync("docs/research/whelp.co/pages/pages-data.json", JSON.stringify(all, null, 1));

// emit feature icons module
let tsx = `import type { SVGProps } from "react";\n\ntype IconProps = SVGProps<SVGSVGElement>;\n`;
for (const { name, svg } of iconMap.values()) {
  const jsx = svg
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/<svg([^>]*)>/, (mm, attrs) => `<svg${attrs} {...props}>`);
  tsx += `\nexport function ${name}(props: IconProps) {\n  return (\n    ${jsx}\n  );\n}\n`;
}
writeFileSync("src/components/feature-icons.tsx", tsx);
console.log("unique feature icons:", iconMap.size);
