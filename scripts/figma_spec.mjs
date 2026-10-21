// Print a compact, readable spec tree for a Figma node from a cached REST dump.
//   node scripts/figma_spec.mjs <json-file> <node-id> [maxDepth]
import fs from "node:fs";

const [file, id, maxDepthArg] = process.argv.slice(2);
const maxDepth = Number(maxDepthArg ?? 99);
const raw = JSON.parse(fs.readFileSync(file, "utf8"));
const rootDoc = raw.document ?? Object.values(raw.nodes ?? {})[0]?.document;

function find(n, target) {
  if (n.id === target) return n;
  for (const c of n.children ?? []) {
    const hit = find(c, target);
    if (hit) return hit;
  }
  return null;
}

const hex = (c, o = 1) => {
  const h = (v) => Math.round(v * 255).toString(16).padStart(2, "0");
  const a = (c.a ?? 1) * o;
  return `#${h(c.r)}${h(c.g)}${h(c.b)}${a < 0.999 ? h(a) : ""}`;
};
const r = (v) => Math.round(v * 100) / 100;

function paint(p) {
  if (p.visible === false) return null;
  if (p.type === "SOLID") return hex(p.color, p.opacity ?? 1);
  if (p.type.startsWith("GRADIENT")) {
    const stops = p.gradientStops.map((s) => `${hex(s.color)} ${Math.round(s.position * 100)}%`).join(", ");
    const [a, b] = p.gradientHandlePositions ?? [];
    const angle = a && b ? Math.round((Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI + 90) : "?";
    return `${p.type.replace("GRADIENT_", "").toLowerCase()}(${angle}deg, ${stops})${p.opacity != null && p.opacity < 1 ? ` op${r(p.opacity)}` : ""}`;
  }
  if (p.type === "IMAGE") return `IMAGE(${p.imageRef?.slice(0, 10)} ${p.scaleMode})`;
  return p.type;
}

function describe(n, parentBox) {
  const b = n.absoluteBoundingBox;
  const parts = [`${n.name} [${n.type}] ${n.id}`];
  if (b) parts.push(`${r(b.width)}x${r(b.height)} @${parentBox ? `${r(b.x - parentBox.x)},${r(b.y - parentBox.y)}` : "0,0"}`);
  if (n.visible === false) parts.push("HIDDEN");
  if (n.opacity != null && n.opacity < 1) parts.push(`opacity ${r(n.opacity)}`);
  if (n.layoutMode && n.layoutMode !== "NONE") {
    const pad = [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft].map((v) => r(v ?? 0)).join("/");
    parts.push(`flex-${n.layoutMode === "HORIZONTAL" ? "row" : "col"} gap${r(n.itemSpacing ?? 0)} pad${pad} ${n.primaryAxisAlignItems ?? ""}/${n.counterAxisAlignItems ?? ""}${n.layoutWrap === "WRAP" ? " wrap" : ""}`);
  }
  const fills = (n.fills ?? []).map(paint).filter(Boolean);
  if (fills.length && n.type !== "TEXT") parts.push(`bg ${fills.join(" + ")}`);
  const strokes = (n.strokes ?? []).map(paint).filter(Boolean);
  if (strokes.length) {
    const w = n.individualStrokeWeights ? JSON.stringify(n.individualStrokeWeights) : n.strokeWeight;
    parts.push(`border ${w} ${strokes.join(",")}${n.strokeDashes ? " dashed" : ""}`);
  }
  if (n.cornerRadius) parts.push(`radius ${r(n.cornerRadius)}`);
  if (n.rectangleCornerRadii) parts.push(`radii ${n.rectangleCornerRadii.map(r).join("/")}`);
  for (const e of n.effects ?? []) {
    if (e.visible === false) continue;
    if (e.type.includes("SHADOW")) parts.push(`${e.type === "INNER_SHADOW" ? "inset " : ""}shadow ${r(e.offset.x)} ${r(e.offset.y)} ${r(e.radius)} ${r(e.spread ?? 0)} ${hex(e.color)}`);
    else parts.push(`${e.type} ${r(e.radius)}`);
  }
  if (n.type === "TEXT") {
    const s = n.style ?? {};
    const color = fills[0] ?? "";
    const lh = s.lineHeightPx ? `/${r(s.lineHeightPx)}` : "";
    const ls = s.letterSpacing ? ` ls${r(s.letterSpacing)}` : "";
    const deco = s.textDecoration && s.textDecoration !== "NONE" ? ` ${s.textDecoration}` : "";
    const tc = s.textCase && s.textCase !== "ORIGINAL" ? ` ${s.textCase}` : "";
    parts.push(`TEXT ${s.fontFamily} ${s.fontWeight}${s.italic ? "i" : ""} ${r(s.fontSize)}${lh}${ls}${deco}${tc} ${s.textAlignHorizontal?.toLowerCase() ?? ""} ${color}`);
    if (n.characterStyleOverrides?.some((v) => v)) {
      const overrides = Object.entries(n.styleOverrideTable ?? {}).map(([k, v]) => `${k}:${v.fontFamily ?? ""} ${v.fontWeight ?? ""} ${(v.fills ?? []).map(paint).join("")}`);
      parts.push(`overrides{${overrides.join("; ")}}`);
    }
    parts.push(JSON.stringify(n.characters.length > 140 ? n.characters.slice(0, 140) + "…" : n.characters));
  }
  return parts.join(" | ");
}

function walk(n, depth, parentBox) {
  console.log("  ".repeat(depth) + describe(n, parentBox));
  if (depth >= maxDepth) return;
  // Vector internals are noise; just note the count.
  if (["VECTOR", "BOOLEAN_OPERATION"].includes(n.type)) return;
  const kids = n.children ?? [];
  if (kids.length && kids.every((k) => ["VECTOR", "BOOLEAN_OPERATION", "ELLIPSE", "LINE"].includes(k.type)) && kids.length > 3) {
    console.log("  ".repeat(depth + 1) + `(${kids.length} vector children)`);
    return;
  }
  for (const c of kids) walk(c, depth + 1, n.absoluteBoundingBox);
}

const node = find(rootDoc, id);
if (!node) {
  console.error("node not found", id);
  process.exit(1);
}
walk(node, 0, null);
