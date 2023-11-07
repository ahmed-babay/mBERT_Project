import fetch from 'node-fetch';
global.fetch = fetch;
import { HfInference } from "@huggingface/inference";
import dotenv  from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN ="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";

const inference = new HfInference(HF_ACCESS_TOKEN);

const model ="nlpconnect/vit-gpt2-image-captioning";
const imageUrl = "https://content.mosaiquefm.net/uploads/content/thumbnails/oussema_mellouli_1522611434.jpg"

const response = await fetch (imageUrl);
const imageBlob = await response.blob();

const result = await inference.imageToText(
  {
    data : imageBlob,
    model : model,

  }
);

console.log(result);