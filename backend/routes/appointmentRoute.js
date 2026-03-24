import express from 'express';
import { bookAppointment, listAppointment, cancelAppointment, updateStatus, paymentStripe, verifyStripe } from '../controllers/appointmentController.js';
import authUser from '../middleware/authUser.js';

const appointmentRouter = express.Router();

appointmentRouter.post('/book', authUser, bookAppointment);
appointmentRouter.get('/my-appointments', authUser, listAppointment);
appointmentRouter.post('/cancel', authUser, cancelAppointment);
appointmentRouter.post('/payment-stripe', authUser, paymentStripe);
appointmentRouter.post('/verify-stripe', authUser, verifyStripe);

// Doctor or Admin can update status
appointmentRouter.post('/update-status', updateStatus);

export default appointmentRouter;