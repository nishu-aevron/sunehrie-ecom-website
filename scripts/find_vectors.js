const fs = require('fs');
const https = require('https');
const path = require('path');

const data = JSON.parse(fs.readFileSync('figma_landing_page.json', 'utf8'));
const doc = data.nodes['93:10798'].document;

const vectorIds = [];

function findVectors(node) {
  if (node.type === 'VECTOR' || node.name === 'Logo' || node.name === 'Group 416' || node.name.includes('Icon')) {
    vectorIds.push({ id: node.id, name: node.name });
  }
  if (node.children) {
    node.children.forEach(findVectors);
  }
}

findVectors(doc);
console.log(`Found ${vectorIds.length} vector/logo candidate nodes.`);

// Let's filter top interesting ones: logo, trust badge icons, gender arch vectors
const interesting = vectorIds.filter(v => 
  v.name === 'Vector' || 
  v.name.includes('Group 416') || 
  v.name === '✧' ||
  v.name.includes('Icon')
).slice(0, 30);

console.log('Selected interesting nodes:', interesting.map(i => `${i.name} (${i.id})`));
