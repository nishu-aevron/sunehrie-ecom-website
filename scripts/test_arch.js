const fs = require('fs');

const svg = fs.readFileSync('public/images/male-arch.svg', 'utf8');
console.log('SVG content:', svg);
