import fetch from 'node-fetch';
global.fetch = fetch;
import { HfInference } from "@huggingface/inference";
import { config } from 'dotenv';

config();

const inference = new HfInference(process.env.ACCESS_TOKEN);

const model ="nlpconnect/vit-gpt2-image-captioning";
const imageUrl = "https://images4.alphacoders.com/109/thumb-1920-1091636.jpg"

const response = await fetch (imageUrl);
const imageBlob = await response.blob();

const result = await inference.imageToText(
  {
    data : imageBlob,
    model : model,

  }
);

console.log(result);