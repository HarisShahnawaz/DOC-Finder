import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRouter.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';

// app config 

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)






//   localhost:4000/api/admin/add-doctor

app.get('/', (req, res) => {
  res.send('Api Working now');
});


app.listen(PORT, () => console.log("Server Started ", PORT));

