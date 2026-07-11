// Parses downloaded whelp.co subpage HTML into compact JSON structure specs
// and emits the asset list. Usage: node scripts/extract-pages.mjs
import { readFileSync, writeFileSync } from "node:fs";

const PAGES = ["inbox", "crm", "reporting", "chatbot", "outbound", "integrations", "pricing", "request-demo"];

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const assets = new Set();

for (const page of PAGES) {
  const html = readFileSync(`docs/research/whelp.co/pages/${page}.html`, "utf8");
  // isolate the Layout content after the navbar wrapper
  const bodyStart = html.indexOf("Navbar_wrapper");
  const body = html.slice(bodyStart);

  const out = { page, sections: [] };

  // walk DualGrid wrappers
  const dgRe = /<div style="([^"]*)" class="(DualGrid_wrapper[^"]*)">([\s\S]*?)(?=<div style="[^"]*" class="DualGrid_wrapper|<div class="Footer_topWrapper)/g;
  let m;
  while ((m = dgRe.exec(body))) {
    const [, style, cls, inner] = m;
    const sec = { type: "dualgrid", cls: cls.replace(/__\w+/g, ""), style };
    const h = inner.match(/<(h[1-6])[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/h[1-6]>/);
    if (h) { sec.headingTag = h[1]; sec.headingCls = h[2].replace(/__\w+/g, ""); sec.heading = decode(h[3].replace(/<[^>]+>/g, "")); }
    const ps = [...inner.matchAll(/<p class="([^"]*)"[^>]*>([\s\S]*?)<\/p>/g)].map((x) => ({ cls: x[1].replace(/__\w+/g, ""), text: decode(x[2].replace(/<[^>]+>/g, "")) }));
    sec.paragraphs = ps;
    const btns = [...inner.matchAll(/<a[^>]*class="(Button_button[^"]*)"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)].map((x) => ({ cls: x[1].replace(/__\w+/g, ""), href: x[2], text: decode(x[3].replace(/<[^>]+>/g, "")) }));
    sec.buttons = btns;
    const imgs = [...inner.matchAll(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*width="(\d+)"[^>]*height="(\d+)"[^>]*class="([^"]*)"/g)].map((x) => ({ alt: decode(x[1]), src: decode(x[2]), w: +x[3], h: +x[4], cls: x[5].replace(/__\w+/g, "") }));
    sec.images = imgs;
    // which half comes first in DOM & order classes
    sec.orderClasses = (inner.match(/DualGrid_order\w+/g) || []).slice(0, 2);
    const firstHalf = inner.match(/class="DualGrid_(left|right)[^"]*"/);
    sec.firstHalf = firstHalf ? firstHalf[1] : null;
    sec.leftCls = (inner.match(/class="DualGrid_left[^"]*? ([\w]+_\w+)__/) || [])[1] || null;
    sec.innerSnippetLen = inner.length;
    out.sections.push(sec);
    for (const img of imgs) {
      const u = img.src.match(/url=([^&]+)/);
      if (u) assets.add(decodeURIComponent(u[1]));
      else if (img.src.startsWith("/_next/static/media/")) assets.add(img.src);
    }
  }

  // non-dualgrid notable blocks
  for (const marker of ["OmniChannel_", "Channels_", "Plans_", "Plan_", "Faq_", "RequestDemo_", "SolutionInfo_", "Quote_wrapper", "WhyCompany_wrapper", "Features_wrapper", "Content_wrapper"]) {
    if (body.includes(marker)) out[marker.replace(/_$/, "")] = true;
  }

  writeFileSync(`docs/research/whelp.co/pages/${page}.structure.json`, JSON.stringify(out, null, 1));
  console.log(page, "sections:", out.sections.length, "| flags:", Object.keys(out).filter((k) => out[k] === true).join(", "));
}

// also collect plain <img src="/_next/static/media/..."> (non-optimized)
for (const page of PAGES) {
  const html = readFileSync(`docs/research/whelp.co/pages/${page}.html`, "utf8");
  for (const m of html.matchAll(/src="(\/_next\/static\/media\/[^"]+)"/g)) assets.add(m[1]);
  for (const m of html.matchAll(/url=(%2F_next%2Fstatic%2Fmedia%2F[^&"]+)/g)) assets.add(decodeURIComponent(m[1]));
}

writeFileSync("docs/research/whelp.co/pages/assets.json", JSON.stringify([...assets].sort(), null, 1));
console.log("unique assets:", assets.size);
