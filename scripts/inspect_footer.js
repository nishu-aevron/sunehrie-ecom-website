const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const landing = Object.values(data.nodes)[0].document;
const footer = landing.children.find(c => c.id === '93:10845');

function inspectTree(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let extra = '';
  if (node.fills && node.fills.length) {
    extra += ' fills=' + JSON.stringify(node.fills.map(f => f.type + (f.color ? ` rgba(${Math.round(f.color.r*255)},${Math.round(f.color.g*255)},${Math.round(f.color.b*255)},${f.color.a})` : '')));
  }
  if (node.style) {
    extra += ' font=' + node.style.fontFamily + ' ' + node.style.fontSize + 'px ' + node.style.fontWeight;
  }
  if (node.layoutMode) {
    extra += ' layout=' + node.layoutMode + ' pad=[' + node.paddingTop + ',' + node.paddingRight + ',' + node.paddingBottom + ',' + node.paddingLeft + '] gap=' + node.itemSpacing;
  }
  if (node.absoluteBoundingBox) {
    extra += ` box=[w=${Math.round(node.absoluteBoundingBox.width)},h=${Math.round(node.absoluteBoundingBox.height)}]`;
  }
  console.log(indent + node.name + ' (' + node.type + ', ' + node.id + ')' + extra);
  if (node.characters) {
    console.log(indent + '  "' + node.characters.replace(/\n/g, '\\n') + '"');
  }
  if (node.children) {
    node.children.forEach(c => inspectTree(c, depth + 1));
  }
}

inspectTree(footer);
