const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const doc = data.nodes['93:10798'].document;

const sortedChildren = doc.children.slice().sort((a, b) => {
  const ay = a.absoluteBoundingBox ? a.absoluteBoundingBox.y : 0;
  const by = b.absoluteBoundingBox ? b.absoluteBoundingBox.y : 0;
  return ay - by;
});

sortedChildren.forEach((section, i) => {
  console.log(`\n=== SECTION ${i}: ${section.name} (ID: ${section.id}) ===`);
  function dumpText(n) {
    if (n.type === 'TEXT') {
      const clean = n.characters.replace(/\r?\n/g, ' \\n ');
      console.log(`  "${clean}" (font: ${n.style?.fontFamily} ${n.style?.fontWeight}, size: ${Math.round(n.style?.fontSize)}px)`);
    }
    if (n.children) n.children.forEach(dumpText);
  }
  dumpText(section);
});
