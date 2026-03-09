import https from 'https';
import fs from 'fs';

const urls = [
  { url: 'https://storage.googleapis.com/aistudio-user-content-prod/f4851f5a-c260-466d-9e66-663f7d1420d9', name: 'yoga.jpg' },
  { url: 'https://storage.googleapis.com/aistudio-user-content-prod/07198585-70e6-4279-8806-03f16d7a421b', name: 'training.jpg' },
  { url: 'https://storage.googleapis.com/aistudio-user-content-prod/710606b2-039c-46b9-968b-577747e909d4', name: 'massage.jpg' },
  { url: 'https://storage.googleapis.com/aistudio-user-content-prod/d409748b-3d61-4131-b75d-6c17f411e86a', name: 'hero.jpg' }
];

urls.forEach(({ url, name }) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(`./public/${name}`);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${name}`);
      });
    } else {
      console.error(`Failed to download ${name}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});
