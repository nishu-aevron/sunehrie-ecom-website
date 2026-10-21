// Fetch Figma node trees + image fill URLs via the REST API.
// Token is read from .env.figma (FIGMA_TOKEN=...) — never commit that file.
//
//   node scripts/figma_fetch.mjs nodes 137:6085 267:22949 ...   -> .figma-cache/nodes/<id>.json
//   node scripts/figma_fetch.mjs fills                         -> .figma-cache/fills.json (imageRef -> url)
//   node scripts/figma_fetch.mjs render <dir> <fmt> <scale> id=name ...  -> public/<dir>/<name>.<fmt>
import fs from "node:fs";
import path from "node:path";

const FILE_KEY = "2BnJ4BOqed5e2quRgqzZb7";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const cache = path.join(root, ".figma-cache");

function token() {
  const envFile = path.join(root, ".env.figma");
  const raw = fs.existsSync(envFile) ? fs.readFileSync(envFile, "utf8") : "";
  const t = raw.match(/^FIGMA_TOKEN=(.+)$/m)?.[1]?.trim() || process.env.FIGMA_TOKEN;
  if (!t) throw new Error("No FIGMA_TOKEN in .env.figma");
  return t;
}

async function api(url) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(`https://api.figma.com/v1${url}`, { headers: { "X-Figma-Token": token() } });
    if (res.status === 429) {
      const wait = Number(res.headers.get("retry-after") || 30);
      console.error(`429 — waiting ${wait}s`);
      await new Promise((r) => setTimeout(r, wait * 1000));
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    return res.json();
  }
  throw new Error("Rate limited repeatedly");
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${dest}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

const [cmd, ...args] = process.argv.slice(2);

if (cmd === "nodes") {
  fs.mkdirSync(path.join(cache, "nodes"), { recursive: true });
  for (const id of args) {
    const data = await api(`/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(id)}`);
    const out = path.join(cache, "nodes", `${id.replace(":", "-")}.json`);
    fs.writeFileSync(out, JSON.stringify(data.nodes[id], null, 0));
    console.log("saved", out);
  }
} else if (cmd === "fills") {
  const data = await api(`/files/${FILE_KEY}/images`);
  fs.mkdirSync(cache, { recursive: true });
  fs.writeFileSync(path.join(cache, "fills.json"), JSON.stringify(data.meta.images));
  console.log("fills:", Object.keys(data.meta.images).length);
} else if (cmd === "render") {
  const [dir, fmt, scale, ...pairs] = args;
  const map = Object.fromEntries(pairs.map((p) => p.split("=")));
  const ids = Object.keys(map);
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50);
    const data = await api(`/images/${FILE_KEY}?ids=${batch.join(",")}&format=${fmt}&scale=${scale}`);
    for (const id of batch) {
      if (!data.images[id]) { console.error("no render for", id); continue; }
      const dest = path.join(root, "public", dir, `${map[id]}.${fmt}`);
      await download(data.images[id], dest);
      console.log("saved", path.relative(root, dest));
    }
  }
} else {
  console.log("usage: nodes <ids...> | fills | render <dir> <fmt> <scale> <id=name...>");
}
