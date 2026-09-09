import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/mongodb.js';

// app config 

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

// middleware
app.use(express.json());
app.use(cors());

//api endpoints

app.get('/', (req, res) => {
  res.send('Api Working now');
});


app.listen(PORT, () => console.log("Server Started ", PORT));

//this is the backend/server.js file