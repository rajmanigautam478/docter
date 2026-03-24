import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import doctorModel from './models/doctorModel.js';

dotenv.config();

const dummyDoctors = [
    {
        name: 'Dr. Richard James',
        email: 'richard@example.com',
        password: 'password123',
        image: '/src/assets/doc1.png',
        speciality: 'General physician',
        education: 'MBBS, MD',
        experience: '4 Years',
        about: 'Dr. Richard has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: '17th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Emily Larson',
        email: 'emily@example.com',
        password: 'password123',
        image: '/src/assets/doc2.png',
        speciality: 'Gynecologist',
        education: 'MBBS, MS',
        experience: '3 Years',
        about: 'Dr. Emily is highly experienced in women’s health, offering compassionate care and comprehensive gynecological services.',
        fees: 60,
        address: '27th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Sarah Patel',
        email: 'sarah@example.com',
        password: 'password123',
        image: '/src/assets/doc3.png',
        speciality: 'Dermatologist',
        education: 'MBBS, DDVL',
        experience: '1 Year',
        about: 'Dr. Sarah specializes in treating a wide range of skin, hair, and nail conditions using advanced dermatological techniques.',
        fees: 30,
        address: '37th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Christopher Lee',
        email: 'chris@example.com',
        password: 'password123',
        image: '/src/assets/doc4.png',
        speciality: 'Pediatricians',
        education: 'MBBS, MD Pediatrics',
        experience: '2 Years',
        about: 'Dr. Christopher is dedicated to the health and well-being of infants, children, and adolescents, providing expert pediatric care.',
        fees: 40,
        address: '47th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Jennifer Garcia',
        email: 'jennifer@example.com',
        password: 'password123',
        image: '/src/assets/doc5.png',
        speciality: 'Neurologist',
        education: 'MBBS, DM Neurology',
        experience: '4 Years',
        about: 'Dr. Jennifer focuses on diagnosing and treating disorders of the nervous system with a patient-centered approach.',
        fees: 50,
        address: '57th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Andrew Williams',
        email: 'andrew@example.com',
        password: 'password123',
        image: '/src/assets/doc6.png',
        speciality: 'Neurologist',
        education: 'MBBS, DM Neurology',
        experience: '4 Years',
        about: 'Dr. Andrew specializes in brain and nerve disorders, ensuring top-tier neurological diagnostics and treatments.',
        fees: 50,
        address: '57th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Christopher Davis',
        email: 'chris_davis@example.com',
        password: 'password123',
        image: '/src/assets/doc7.png',
        speciality: 'General physician',
        education: 'MBBS, MD',
        experience: '4 Years',
        about: 'Dr. Davis provides holistic healthcare services, from routine checkups to managing chronic conditions efficiently.',
        fees: 50,
        address: '17th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Timothy White',
        email: 'timothy@example.com',
        password: 'password123',
        image: '/src/assets/doc8.png',
        speciality: 'Gynecologist',
        education: 'MBBS, MS',
        experience: '3 Years',
        about: 'Dr. Timothy is an expert in maternal health and reproductive systems, focused on providing premium care.',
        fees: 60,
        address: '27th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Ava Mitchell',
        email: 'ava@example.com',
        password: 'password123',
        image: '/src/assets/doc9.png',
        speciality: 'Dermatologist',
        education: 'MBBS, DDVL',
        experience: '1 Year',
        about: 'Dr. Ava focuses on clinical and cosmetic dermatology, helping patients achieve healthy and glowing skin.',
        fees: 30,
        address: '37th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Jeffrey King',
        email: 'jeffrey@example.com',
        password: 'password123',
        image: '/src/assets/doc10.png',
        speciality: 'Pediatricians',
        education: 'MBBS, MD Pediatrics',
        experience: '2 Years',
        about: 'Dr. Jeffrey offers high-quality pediatric services with a friendly environment for children and parents.',
        fees: 40,
        address: '47th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Zoe Kelly',
        email: 'zoe@example.com',
        password: 'password123',
        image: '/src/assets/doc11.png',
        speciality: 'Neurologist',
        education: 'MBBS, DM Neurology',
        experience: '4 Years',
        about: 'Dr. Zoe provides advanced neurological care for complex brain and spinal cord disorders.',
        fees: 50,
        address: '57th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Patrick Harris',
        email: 'patrick@example.com',
        password: 'password123',
        image: '/src/assets/doc12.png',
        speciality: 'Neurologist',
        education: 'MBBS, DM Neurology',
        experience: '4 Years',
        about: 'Dr. Patrick is a specialist in neuro-rehabilitation and long-term care for neurological patients.',
        fees: 50,
        address: '57th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Chloe Evans',
        email: 'chloe@example.com',
        password: 'password123',
        image: '/src/assets/doc13.png',
        speciality: 'General physician',
        education: 'MBBS, MD',
        experience: '4 Years',
        about: 'Dr. Chloe is dedicated to family medicine, providing comprehensive care for all age groups.',
        fees: 50,
        address: '17th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Ryan Martinez',
        email: 'ryan@example.com',
        password: 'password123',
        image: '/src/assets/doc14.png',
        speciality: 'Gynecologist',
        education: 'MBBS, MS',
        experience: '3 Years',
        about: 'Dr. Ryan offers expert care in prenatal and postnatal health, ensuring safety for mother and child.',
        fees: 60,
        address: '27th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    },
    {
        name: 'Dr. Amelia Hill',
        email: 'amelia@example.com',
        password: 'password123',
        image: '/src/assets/doc15.png',
        speciality: 'Dermatologist',
        education: 'MBBS, DDVL',
        experience: '1 Year',
        about: 'Dr. Amelia is a specialist in laser treatments and advanced skin care solutions for radiant health.',
        fees: 30,
        address: '37th Cross, Richmond Circle, Ring Road, London',
        available: true,
        date: Date.now()
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB Atlas');

        // Optional: clear existing doctors to avoid duplicates if you want a fresh list
        // await doctorModel.deleteMany({});
        // console.log('Cleared existing doctors');

        const salt = await bcrypt.genSalt(10);

        for (let doctor of dummyDoctors) {
            // Check if doctor already exists
            const existing = await doctorModel.findOne({ email: doctor.email });
            if (!existing) {
                const hashedPassword = await bcrypt.hash(doctor.password, salt);
                doctor.password = hashedPassword;
                await doctorModel.create(doctor);
                console.log(`Added doctor: ${doctor.name}`);
            } else {
                await doctorModel.updateOne({ email: doctor.email }, { $set: { image: doctor.image } });
                console.log(`Updated existing doctor image: ${doctor.name}`);
            }
        }

        console.log('Database seeding completed with all 15 doctors!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();