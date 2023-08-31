import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

//Port
export let port = process.env.PORT;

//Server
let app = express();

//Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

//Routes
app.get('/', async (req, res) => {
    res.send('Hello World');
});

let startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`)
        });
    } catch (error) {
        console.error(`Error connecting to Database: ${error}`);
    }
};

startServer()
