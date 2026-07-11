// Downloads all binary assets from whelp.co into public/
// Usage: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://www.whelp.co";

const ASSETS = [
  // Hero (5 layered images)
  ["/_next/static/media/blue-bg.bef5b55c.png", "public/images/hero/blue-bg.png"],
  ["/_next/static/media/model.6a793c11.png", "public/images/hero/model.png"],
  ["/_next/static/media/top-right.1c4a4529.png", "public/images/hero/top-right.png"],
  ["/_next/static/media/left-center.9c70bb56.png", "public/images/hero/left-center.png"],
  ["/_next/static/media/bottom-right.75563bb7.png", "public/images/hero/bottom-right.png"],
  // DualGrid feature sections
  ["/_next/static/media/right.7cd02026.png", "public/images/sections/crm.png"],
  ["/_next/static/media/left.434d8fad.png", "public/images/sections/inbox.png"],
  ["/_next/static/media/right.0833fab0.png", "public/images/sections/reports.png"],
  ["/_next/static/media/left.be525214.png", "public/images/sections/outbound.png"],
  ["/_next/static/media/right.c09b7db4.png", "public/images/sections/chatbot.png"],
  ["/_next/static/media/right.9bdacdda.png", "public/images/sections/integrations.png"],
  // Quote
  ["/_next/static/media/seymur.88879f00.png", "public/images/quote/seymur.png"],
  // Solutions carousel cards
  ["/_next/static/media/customerCare.97f008ed.png", "public/images/solutions/customer-care.png"],
  ["/_next/static/media/insuranceSupport.6644d531.png", "public/images/solutions/insurance-support.png"],
  ["/_next/static/media/banking.55e7b2c6.png", "public/images/solutions/banking.png"],
  ["/_next/static/media/hotel.1b4fdd94.png", "public/images/solutions/hotel.png"],
  ["/_next/static/media/innovativeSupport.9e22c0fa.png", "public/images/solutions/innovative-support.png"],
  ["/_next/static/media/streamlinedSupport.63347059.png", "public/images/solutions/streamlined-support.png"],
  ["/_next/static/media/travelSupport.79c2bd66.png", "public/images/solutions/travel-support.png"],
  ["/_next/static/media/realEstateSupport.a8292471.png", "public/images/solutions/real-estate-support.png"],
  ["/_next/static/media/responsiveSupport.cdcd8bc8.png", "public/images/solutions/responsive-support.png"],
  ["/_next/static/media/autoSalesSupport.5b04fecc.png", "public/images/solutions/auto-sales-support.png"],
  // SEO
  ["/site.png", "public/seo/og-image.png"],
  ["/favicon.ico", "public/seo/favicon.ico"],
];

async function fetchWithRetry(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (i === tries - 1) throw err;
      await new Promise((r) => setTimeout(r, 1500 * (i + 1)));
    }
  }
}

async function download([path, dest]) {
  const buf = await fetchWithRetry(BASE + path);
  await mkdir(dirname(join(process.cwd(), dest)), { recursive: true });
  await writeFile(join(process.cwd(), dest), buf);
  console.log(`ok  ${dest} (${(buf.length / 1024).toFixed(1)} KB)`);
}

const failed = [];
for (let i = 0; i < ASSETS.length; i += 4) {
  const batch = ASSETS.slice(i, i + 4);
  await Promise.all(
    batch.map((a) =>
      download(a).catch((err) => {
        failed.push([a[0], String(err)]);
        console.error(`FAIL ${a[0]}: ${err}`);
      })
    )
  );
}

if (failed.length) {
  console.error(`\n${failed.length} downloads failed`);
  process.exit(1);
}
console.log(`\nAll ${ASSETS.length} assets downloaded.`);
