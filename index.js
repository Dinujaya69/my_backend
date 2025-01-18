import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("☠️  MongoDB Connection Successfully  "))
.catch(err => console.log(err));

// Server Configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` 🚀 Server is up and running on port: ${PORT}`);
});