import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
import userRouter from './routes/userRoute.js';
import appointmentRouter from './routes/appointmentRoute.js';
import connectCloudinary from './config/cloudinary.js';

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();
connectCloudinary();

// api endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Doctor Appointment Booking System Backend Working');
});

app.listen(port, () => console.log(`Server started on PORT ${port}`));