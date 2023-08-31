import mongoose from "mongoose";

//Create post schema
let Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
});

//Create a model from the schema above
let PostSchema = mongoose.model('Post', Post);

export default PostSchema;