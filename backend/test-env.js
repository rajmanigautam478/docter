import dotenv from 'dotenv';
dotenv.config();
console.log('Secret:', process.env.CLOUDINARY_API_SECRET);
console.log('Length:', process.env.CLOUDINARY_API_SECRET?.length);
