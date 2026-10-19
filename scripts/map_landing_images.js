const fs = require('fs');
const https = require('https');
const path = require('path');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const imagesMap = JSON.parse(fs.readFileSync('figma_images_map.json', 'utf8'));
const doc = data.nodes['93:10798'].document;

const usedImages = [];

function findImages(node, sectionName = '') {
  if (node.fills && Array.isArray(node.fills)) {
    for (const f of node.fills) {
      if (f.type === 'IMAGE' && f.imageRef) {
        usedImages.push({
          nodeId: node.id,
          nodeName: node.name,
          section: sectionName,
          imageRef: f.imageRef,
          url: imagesMap[f.imageRef],
          width: node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.width) : null,
          height: node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.height) : null,
        });
      }
    }
  }
  if (node.children) {
    node.children.forEach(c => findImages(c, sectionName));
  }
}

const sortedChildren = doc.children.slice().sort((a, b) => {
  const ay = a.absoluteBoundingBox ? a.absoluteBoundingBox.y : 0;
  const by = b.absoluteBoundingBox ? b.absoluteBoundingBox.y : 0;
  return ay - by;
});

sortedChildren.forEach((section, idx) => {
  findImages(section, `Section_${idx}_${section.name}`);
});

console.log(`Found ${usedImages.length} images used on Landing Page:`);
usedImages.forEach((img, i) => {
  console.log(`${i}: [${img.section}] "${img.nodeName}" (${img.width}x${img.height}) -> ref: ${img.imageRef.substring(0, 10)}... (hasUrl: ${!!img.url})`);
});

fs.writeFileSync('used_landing_images.json', JSON.stringify(usedImages, null, 2));
