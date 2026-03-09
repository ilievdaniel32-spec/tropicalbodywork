import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const imageBytes = fs.readFileSync("public/hero.jpg");
  const base64ImageData = imageBytes.toString("base64");

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64ImageData,
            mimeType: "image/jpeg",
          },
        },
        {
          text: 'remove the person on the right, keep only the person on the left doing the headstand',
        },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      const base64EncodeString = part.inlineData.data;
      fs.writeFileSync("public/hero_edited.jpg", Buffer.from(base64EncodeString, "base64"));
      console.log("Image saved successfully.");
    }
  }
}

main().catch(console.error);
