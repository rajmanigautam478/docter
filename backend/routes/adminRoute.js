import express from 'express';
import { loginAdmin, addDoctor, allDoctors, appointmentsAdmin, deleteDoctor, adminDashboard, cancelAppointment, updateAppointmentStatus } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';
import authAdmin from '../middleware/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/login', loginAdmin);
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.get('/all-doctors', authAdmin, allDoctors);
adminRouter.get('/appointments', authAdmin, appointmentsAdmin);
adminRouter.post('/delete-doctor', authAdmin, deleteDoctor);
adminRouter.get('/dashboard', authAdmin, adminDashboard);
adminRouter.post('/cancel-appointment', authAdmin, cancelAppointment);
adminRouter.post('/update-appointment-status', authAdmin, updateAppointmentStatus);

export default adminRouter;