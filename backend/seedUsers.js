import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import userModel from './models/userModel.js';
import doctorModel from './models/doctorModel.js';
import appointmentModel from './models/appointmentModel.js';

dotenv.config();

const dummyUsers = [
    {
        name: 'Edward Vincent',
        email: 'edward@example.com',
        password: 'password123',
        image: 'https://ui-avatars.com/api/?name=Edward+Vincent&background=random&color=fff',
        address: '57th Cross, Richmond Circle, Church Road, London',
        gender: 'Male',
        dob: '2000-07-20',
        phone: '+1 123 456 7890'
    },
    {
        name: 'Sophia Clark',
        email: 'sophia@example.com',
        password: 'password123',
        image: 'https://ui-avatars.com/api/?name=Sophia+Clark&background=random&color=fff',
        address: '10th Avenue, Maple Street, New York',
        gender: 'Female',
        dob: '1995-05-15',
        phone: '+1 987 654 3210'
    }
];

const seedUsersAndAppointments = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB Atlas');

        const salt = await bcrypt.genSalt(10);
        const addedUsers = [];

        // 1. Add Users
        for (let user of dummyUsers) {
            const existingUser = await userModel.findOne({ email: user.email });
            if (!existingUser) {
                const hashedPassword = await bcrypt.hash(user.password, salt);
                user.password = hashedPassword;
                const newUser = await userModel.create(user);
                addedUsers.push(newUser);
                console.log(`Added user: ${user.name}`);
            } else {
                addedUsers.push(existingUser);
                console.log(`User already exists: ${user.name}`);
            }
        }

        // 2. Fetch some doctors to link appointments to
        const doctors = await doctorModel.find({}).limit(3);
        
        if (doctors.length > 0 && addedUsers.length > 0) {
            // 3. Add Dummy Appointments
            const dummyAppointments = [
                {
                    userId: addedUsers[0]._id.toString(),
                    doctorId: doctors[0]._id.toString(),
                    date: '2026-03-15',
                    time: '10:00 am',
                    status: 'Pending'
                },
                {
                    userId: addedUsers[0]._id.toString(),
                    doctorId: doctors[1]._id.toString(),
                    date: '2026-03-16',
                    time: '02:00 pm',
                    status: 'Cancelled'
                },
                {
                    userId: addedUsers[1]._id.toString(),
                    doctorId: doctors[2]._id.toString(),
                    date: '2026-03-20',
                    time: '11:30 am',
                    status: 'Pending'
                }
            ];

            for (let appointment of dummyAppointments) {
                // simple check to avoid exact duplicates
                const existingApp = await appointmentModel.findOne({
                    userId: appointment.userId,
                    doctorId: appointment.doctorId,
                    date: appointment.date,
                    time: appointment.time
                });
                
                if(!existingApp) {
                    await appointmentModel.create(appointment);
                    console.log(`Added appointment for User ID: ${appointment.userId}`);
                } else {
                    console.log(`Appointment already exists for this slot.`);
                }
            }
        } else {
            console.log("No doctors found to attach appointments to. Add doctors first.");
        }

        console.log('Database seeding for users and appointments completed!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedUsersAndAppointments();