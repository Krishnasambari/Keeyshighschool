const fs   = require('fs');
const path = require('path');

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
const VIDEO_EXTS = ['.mp4', '.webm', '.ogg', '.mov'];

function listFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => exts.includes(path.extname(f).toLowerCase()))
    .sort()
    .map(f => dir.replace(/\\/g, '/') + '/' + f);
}

const manifest = {
  images: listFiles('gallery/images', IMAGE_EXTS),
  videos: listFiles('gallery/videos', VIDEO_EXTS)
};

fs.writeFileSync('gallery-manifest.json', JSON.stringify(manifest, null, 2));
console.log('Gallery manifest generated —', manifest.images.length, 'images,', manifest.videos.length, 'videos');
