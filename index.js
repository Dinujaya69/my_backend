import express from 'express';
import { PORT } from "./src/config/env.js";
import userRouter from './src/routes/userRoute.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from "cors";
import errorHandler from './src/middlewares/error.middleware.js';
import connectDB from './src/config/db.js';
//import productRouter from './src/routes/ProductRoute.js';


// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
// Middleware
app.use(bodyParser.json());



// Connect Database
connectDB();
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter);

//app.use('/api/product', productRouter);




// Server Configuration

app.listen(PORT, () => {
    console.log(` 🚀 Server is up and running on port: ${PORT}`);
});

app.use(errorHandler);