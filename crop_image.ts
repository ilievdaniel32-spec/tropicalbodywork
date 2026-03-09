import sharp from "sharp";

async function main() {
  const metadata = await sharp("public/hero.jpg").metadata();
  console.log(`Width: ${metadata.width}, Height: ${metadata.height}`);
  
  // Crop the left 50% of the image
  const width = Math.floor(metadata.width! * 0.55);
  await sharp("public/hero.jpg")
    .extract({ left: 0, top: 0, width: width, height: metadata.height! })
    .toFile("public/hero_cropped.jpg");
    
  console.log("Cropped successfully.");
}

main().catch(console.error);
