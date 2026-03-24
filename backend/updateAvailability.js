import mongoose from 'mongoose';
import dotenv from 'dotenv';
import doctorModel from './models/doctorModel.js';

dotenv.config();

const updateAvailability = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB Atlas');

        const result = await doctorModel.updateMany({}, { $set: { available: true } });
        console.log(`Updated ${result.modifiedCount} doctors to be available.`);

        process.exit(0);
    } catch (error) {
        console.error('Error updating:', error);
        process.exit(1);
    }
};

updateAvailability();