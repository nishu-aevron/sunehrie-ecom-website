const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const doc = data.nodes['93:10798'].document;

console.log('Landing page absoluteBoundingBox:', doc.absoluteBoundingBox);

const sortedChildren = doc.children.slice().sort((a, b) => {
  const ay = a.absoluteBoundingBox ? a.absoluteBoundingBox.y : 0;
  const by = b.absoluteBoundingBox ? b.absoluteBoundingBox.y : 0;
  return ay - by;
});

sortedChildren.forEach((child, idx) => {
  const box = child.absoluteBoundingBox || {};
  console.log(`${idx}: [y=${Math.round(box.y)}, h=${Math.round(box.height)}, w=${Math.round(box.width)}] "${child.name}" (ID: ${child.id}, type: ${child.type})`);
});
