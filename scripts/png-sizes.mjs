import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function pngSize(file) {
  const buf = readFileSync(file);
  return `${buf.readUInt32BE(16)}x${buf.readUInt32BE(20)}`;
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)]
  );
}

for (const f of walk("public/images").filter((f) => f.endsWith(".png"))) {
  console.log(f.replaceAll("\\", "/"), pngSize(f));
}
