import express from 'express';
import { loginDoctor, appointmentsDoctor, doctorProfile, updateDoctorProfile, doctorDetails, doctorList } from '../controllers/doctorController.js';
import authDoctor from '../middleware/authDoctor.js';

const doctorRouter = express.Router();

doctorRouter.post('/login', loginDoctor);
doctorRouter.get('/list', doctorList);
doctorRouter.get('/details/:docId', doctorDetails);
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor);
doctorRouter.get('/profile', authDoctor, doctorProfile);
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile);

export default doctorRouter;