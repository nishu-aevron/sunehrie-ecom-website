const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const landing = Object.values(data.nodes)[0].document;

function printNode(n, depth = 0) {
  const box = n.absoluteBoundingBox ? ` [w=${Math.round(n.absoluteBoundingBox.width)}, h=${Math.round(n.absoluteBoundingBox.height)}, x=${Math.round(n.absoluteBoundingBox.x)}, y=${Math.round(n.absoluteBoundingBox.y)}]` : '';
  const text = n.characters ? ` text="${n.characters.replace(/\n/g, ' ')}"` : '';
  const fills = n.fills && n.fills.length ? ` fills=${JSON.stringify(n.fills.map(f => f.type + (f.color ? `(${Math.round(f.color.r*255)},${Math.round(f.color.g*255)},${Math.round(f.color.b*255)},${f.color.a})` : '')))}` : '';
  console.log(`${'  '.repeat(depth)}${n.name} (${n.type}, ${n.id})${box}${text}${fills}`);
  if (n.children && depth < 6) {
    n.children.forEach(c => printNode(c, depth + 1));
  }
}

const targetId = process.argv[2] || '93:10799';
const target = landing.children.find(c => c.id === targetId || c.name.includes(targetId));
if (target) {
  printNode(target, 0);
} else {
  console.log('Not found:', targetId);
}
