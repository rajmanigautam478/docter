import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String, required: true },
    fees: { type: Number, required: true },
    about: { type: String, required: true },
    address: { type: String, required: true },
    available: { type: Boolean, default: true },
    date: { type: Number, required: true, default: Date.now }
}, { minimize: false });

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
export default doctorModel;