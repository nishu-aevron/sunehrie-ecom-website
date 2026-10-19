const https = require('https');
const fs = require('fs');
const path = require('path');

const ids = [
  'I93:11326;87:6171', // logo
  '93:11094', // male arch
  '93:11101', // female arch
  '93:11109', // kids arch
  '93:11005', // ✧ diamond star
  '93:11162', // feather vector in New Collection
  '93:11001'  // footer peacock vector
].join(',');

const options = {
  hostname: 'api.figma.com',
  path: '/v1/images/2BnJ4BOqed5e2quRgqzZb7?ids=' + encodeURIComponent(ids) + '&format=svg',
  headers: {
    'X-Figma-Token': process.env.FIGMA_TOKEN
  }
};

https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const json = JSON.parse(data);
    console.log('SVG URLs:', json.images);
    if (!json.images) return;

    const dir = path.join(process.cwd(), 'public', 'figma');
    const nameMap = {
      'I93:11326;87:6171': 'logo.svg',
      '93:11094': 'male-arch.svg',
      '93:11101': 'female-arch.svg',
      '93:11109': 'kids-arch.svg',
      '93:11005': 'sparkle.svg',
      '93:11162': 'feather.svg',
      '93:11001': 'peacock.svg'
    };

    Object.entries(json.images).forEach(([id, url]) => {
      if (!url) return;
      const filename = nameMap[id] || (id.replace(/[^a-zA-Z0-9]/g, '_') + '.svg');
      const file = fs.createWriteStream(path.join(dir, filename));
      https.get(url, r => {
        r.pipe(file);
        file.on('finish', () => console.log('Downloaded SVG:', filename));
      });
    });
  });
});
