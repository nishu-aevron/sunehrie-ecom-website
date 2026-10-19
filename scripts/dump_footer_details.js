const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const landing = Object.values(data.nodes)[0].document;
const footer = landing.children.find(c => c.id === '93:10845');

console.log('Footer styles:');
console.log('fills:', JSON.stringify(footer.fills, null, 2));
console.log('strokes:', JSON.stringify(footer.strokes, null, 2));
console.log('backgroundColor:', footer.backgroundColor);

function printCol(n, prefix = '') {
  const char = n.characters ? ` -> "${n.characters.replace(/\n/g, ' ')}"` : '';
  const font = n.style ? ` [font: ${n.style.fontFamily} ${n.style.fontWeight} ${n.style.fontSize}px color: ${JSON.stringify(n.fills)}]` : '';
  console.log(`${prefix}${n.name} (${n.type}) ${n.id}${char}${font}`);
  if (n.children) {
    n.children.forEach(c => printCol(c, prefix + '  '));
  }
}

printCol(footer);
