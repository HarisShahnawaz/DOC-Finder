import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';


// app config 

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

//api endpoints

app.get('/', (req, res) => {
  res.send('Api Working');
});


app.listen(PORT, () => console.log("Server Started ", PORT));