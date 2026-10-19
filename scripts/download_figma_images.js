const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'figma');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const used = JSON.parse(fs.readFileSync('used_landing_images.json', 'utf8'));

// Deduplicate by imageRef
const unique = new Map();
used.forEach(u => {
  if (u.url && !unique.has(u.imageRef)) {
    unique.set(u.imageRef, u);
  }
});

console.log('Downloading', unique.size, 'unique images to public/figma...');

const entries = Array.from(unique.entries());
let completed = 0;
let queueIdx = 0;

function worker() {
  if (queueIdx >= entries.length) return;
  const currentIdx = queueIdx++;
  const [ref, info] = entries[currentIdx];
  const filename = ref + '.png';
  const filePath = path.join(dir, filename);

  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 100) {
    completed++;
    console.log(`[${completed}/${entries.length}] Exists: ${filename}`);
    return worker();
  }

  const file = fs.createWriteStream(filePath);
  https.get(info.url, res => {
    if (res.statusCode !== 200) {
      console.error(`Status ${res.statusCode} for ${ref}`);
      return worker();
    }
    res.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        completed++;
        console.log(`[${completed}/${entries.length}] Saved ${filename} for "${info.nodeName}" in ${info.section}`);
        worker();
      });
    });
  }).on('error', err => {
    console.error('Error downloading', ref, err.message);
    worker();
  });
}

// 6 concurrent workers
for (let i = 0; i < 6; i++) {
  worker();
}
