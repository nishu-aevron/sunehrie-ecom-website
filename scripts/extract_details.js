const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const doc = data.nodes['93:10798'].document;

function printNodeTree(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let info = `${indent}- [${node.type}] "${node.name}" (id: ${node.id})`;
  
  if (node.type === 'TEXT') {
    info += ` -> text: "${node.characters ? node.characters.replace(/\n/g, ' ') : ''}"`;
    if (node.style) {
      info += ` (font: ${node.style.fontFamily} ${node.style.fontWeight}, size: ${node.style.fontSize}px, fill: ${JSON.stringify(node.fills)})`;
    }
  }

  // check if has image fills
  if (node.fills && Array.isArray(node.fills)) {
    const imgFill = node.fills.find(f => f.type === 'IMAGE');
    if (imgFill) {
      info += ` [IMAGE_FILL ref: ${imgFill.imageRef}]`;
    }
  }
  
  console.log(info);

  if (node.children && depth < 4) {
    node.children.forEach(c => printNodeTree(c, depth + 1));
  }
}

const sortedChildren = doc.children.slice().sort((a, b) => {
  const ay = a.absoluteBoundingBox ? a.absoluteBoundingBox.y : 0;
  const by = b.absoluteBoundingBox ? b.absoluteBoundingBox.y : 0;
  return ay - by;
});

sortedChildren.forEach((child, i) => {
  console.log(`\n==================== SECTION ${i}: "${child.name}" ====================`);
  printNodeTree(child, 0);
});
