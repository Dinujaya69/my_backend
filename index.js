import express from 'express';
import { PORT } from "./src/config/env.js";
import userRouter from './src/routes/userRoute.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from "cors";
import errorHandler from './src/middlewares/error.middleware.js';
import connectDB from './src/config/db.js';
import productsRoute from './src/routes/productsRoute.js';
import path from 'path';


// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
// Middleware
app.use(bodyParser.json());



// Connect Database
connectDB();
app.use(errorHandler);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//user routes
app.use('/api/user', userRouter);
//products routes
app.use('/api/product', productsRoute);




// Server Configuration

app.listen(PORT, () => {
    console.log(` 🚀 Server is up and running on port: ${PORT}`);
});

app.use(errorHandler);
