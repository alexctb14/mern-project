import mongoose from "mongoose";

let connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url).then(() => {
        console.log('MongoDB connected')
    }).catch((err) => {
        console.error(err);
    });
};

export default connectDB;