// Downloads all subpage assets listed in docs/research/whelp.co/pages/assets.json
// into public/images/pages/ (keeping hashed filenames to avoid collisions).
import { mkdir, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { join, basename } from "node:path";

const BASE = "https://www.whelp.co";
const assets = JSON.parse(readFileSync("docs/research/whelp.co/pages/assets.json", "utf8"));

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

await mkdir(join(process.cwd(), "public/images/pages"), { recursive: true });
const failed = [];
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(
    assets.slice(i, i + 4).map(async (path) => {
      const dest = join(process.cwd(), "public/images/pages", basename(path));
      try {
        const buf = await fetchWithRetry(BASE + path);
        await writeFile(dest, buf);
        console.log(`ok  ${basename(path)} (${(buf.length / 1024).toFixed(1)} KB)`);
      } catch (err) {
        failed.push(path);
        console.error(`FAIL ${path}: ${err}`);
      }
    })
  );
}
if (failed.length) {
  console.error(`\n${failed.length} failed`);
  process.exit(1);
}
console.log(`\nAll ${assets.length} subpage assets downloaded.`);
