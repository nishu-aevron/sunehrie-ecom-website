// List or download IMAGE fills under a node.
//   node scripts/figma_images.mjs list <json> <node-id>
//   node scripts/figma_images.mjs get <json> <out-dir under public/> ref=name ...
//     (ref may be a prefix of the imageRef, as printed by `list`)
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const [cmd, file, arg, ...rest] = process.argv.slice(2);
const doc = JSON.parse(fs.readFileSync(file, "utf8")).document;

function find(n, id) {
  if (n.id === id) return n;
  for (const c of n.children ?? []) {
    const hit = find(c, id);
    if (hit) return hit;
  }
}

if (cmd === "list") {
  const seen = new Map();
  (function walk(n, trail) {
    if (n.visible === false) return;
    for (const f of n.fills ?? []) {
      if (f.type === "IMAGE" && f.visible !== false) {
        const b = n.absoluteBoundingBox ?? {};
        const key = f.imageRef;
        if (!seen.has(key)) seen.set(key, []);
        seen.get(key).push(`${trail}/${n.name} ${Math.round(b.width)}x${Math.round(b.height)} ${f.scaleMode} ${n.id}`);
      }
    }
    for (const c of n.children ?? []) walk(c, n.name.slice(0, 24));
  })(find(doc, arg), "");
  for (const [ref, uses] of seen) console.log(ref.slice(0, 12), uses.length, "×", uses[0]);
} else if (cmd === "get") {
  const fills = JSON.parse(fs.readFileSync(path.join(root, ".figma-cache/fills.json"), "utf8"));
  const refs = Object.keys(fills);
  for (const pair of rest) {
    const [prefix, name] = pair.split("=");
    const ref = refs.find((r) => r.startsWith(prefix));
    if (!ref) { console.error("unknown ref", prefix); continue; }
    const res = await fetch(fills[ref]);
    const buf = Buffer.from(await res.arrayBuffer());
    const type = buf.subarray(0, 4).toString("hex");
    const ext = type.startsWith("89504e47") ? "png" : type.startsWith("ffd8") ? "jpg" : type === "52494646" ? "webp" : "bin";
    const dest = path.join(root, "public", arg, `${name}.${ext}`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, buf);
    console.log(path.relative(root, dest), Math.round(buf.length / 1024) + "KB");
  }
}
