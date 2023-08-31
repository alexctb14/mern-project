import express from "express";
import * as dotenv from 'dotenv';
import { OpenAI } from "openai";

dotenv.config();

let router = express.Router();

//Connecting to OpenAI API
let openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

//Test Route
router.route('/').get( (req, res) => {
    res.send('DALL-E API Connected Successfully')
});

//Call to OpenAI DALL-E API
router.route('/').post(async (req, res) => {
    try {
        //Prompt is from the frontend prompt input box
        let { prompt } = req.body;

        //connecting to the api and creating an image
        let aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        //variable set to image recieved to send to frontend
        let image = aiResponse.data.data[0].b64_json;

        //200 code if everything works
        res.status(200).json({ photo: image });

    } catch (error) {
        console.error(`Error generating image ${error}`);
    }
})

export default router;