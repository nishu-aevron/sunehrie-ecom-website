const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'public', 'figma');
const destDir = path.join(process.cwd(), 'public', 'images');

const map = {
  // SVGs
  'logo.svg': 'logo.svg',
  'footer-logo.svg': 'footer-logo.svg',
  'male-arch.svg': 'male-arch.svg',
  'female-arch.svg': 'female-arch.svg',
  'kids-arch.svg': 'kids-arch.svg',
  'feather.svg': 'feather.svg',
  'peacock.svg': 'peacock.svg',
  'sparkle.svg': 'sparkle.svg',

  // Hero
  'e089300941138a743ced2c0d4ca081eeda604c9c.png': 'hero-banner.png',

  // Products
  'e54dfadbf794db896e55a8b0358a677ec4c6dba2.png': 'products/product-1.png',
  '14a6a2d7a7eff6316c729a687a36e04b5558c8ba.png': 'products/product-2.png',
  '42b05d433f1d5a31ce9357e86a19d2b549506694.png': 'products/product-3.png',
  '2f6c61d4e49524cbcbd73963b16080e0eee1a9eb.png': 'products/product-4.png',

  // Gender
  '3809d984a3d77ed1a00892f98d709ea44c45ff18.png': 'gender/male.png',
  '218be2cd2f9a00907a2f93b8a87931164fab320c.png': 'gender/female.png',
  '3ab0cd8d462f8d3f616c5e43064d7150a8e6adb9.png': 'gender/kids.png',

  // Purity
  'e1d63b46fa82431edd01f50916e128ef967f35d3.png': 'purity/9kt.png',
  '5fbe8cba70b836012c8be1b90633d9c708663631.png': 'purity/14kt.png',
  'd6d4ebfc27a2645b5e935d6b78af6b2c5602482f.png': 'purity/18kt.png',

  // Banner
  '80fbcea7bea59ef6f7e8f81f32030ee20e1116f3.png': 'banner/festive-crowd.png',

  // Occasion
  '6335ab280ab8fca14c043aa9755a6a7decc5d2ba.png': 'occasion/office.png',
  'bc1a998d451013443487022ea4c9ab8ff199fc05.png': 'occasion/party.png',
  '91db5df1bb5943afb029efc2d595fe30244511f0.png': 'occasion/wedding.png',
  '1928c9fbd872024651ee8058356d430e2d819f0f.png': 'occasion/daily.png',

  // Reels
  '7a7360cd4f3f02b41bacd1a4f3675eb784e69707.png': 'reels/reel-1.png',
  '7c175e3c9e2a09f7152cf65d89135b8d0eace389.png': 'reels/reel-2.png',
  '15007f4832c987cbd1320d8288dc691d5c499f65.png': 'reels/reel-center.png',

  // Showroom
  'b050c6ed8e7e8d10db96f4a29135a59c3daabe07.png': 'showroom/interior.png',
  'da82fd3c28adfac4f174e918b459460d5152780d.png': 'showroom/entrance.png',

  // Chips
  'da96f0ec0b78acf333f8a1c9d41575471f236e1b.png': 'chips/chip-1.png',
  'd6186ab54eba6bc50032a34f1c551262ff22bb02.png': 'chips/chip-2.png',
  '456e661d3ee8ac7ce11a0257eefbfd2312030ffc.png': 'chips/chip-3.png',
};

Object.entries(map).forEach(([srcFile, destRel]) => {
  const src = path.join(srcDir, srcFile);
  const dest = path.join(destDir, destRel);
  const parent = path.dirname(dest);
  if (!fs.existsSync(parent)) fs.mkdirSync(parent, { recursive: true });

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${destRel}`);
  } else {
    console.warn(`Source not found: ${srcFile}`);
  }
});

console.log('Organize complete!');
