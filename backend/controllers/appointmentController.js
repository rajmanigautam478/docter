import appointmentModel from '../models/appointmentModel.js';
import doctorModel from '../models/doctorModel.js';
import userModel from '../models/userModel.js';
import Stripe from 'stripe';

// API to book appointment
const bookAppointment = async (req, res) => {
    try {
        const { userId, doctorId, date, time } = req.body;

        const docData = await doctorModel.findById(doctorId).select('-password');
        if (!docData) {
            return res.json({ success: false, message: 'Doctor not available' });
        }
        
        if (!docData.available) {
            return res.json({ success: false, message: 'Doctor not available' });
        }

        const appointmentData = {
            userId, doctorId, date, time,
            amount: docData.fees,
            status: "Pending"
        };

        const newAppointment = new appointmentModel(appointmentData);
        await newAppointment.save();
        res.json({ success: true, message: 'Appointment Booked' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to get user appointments
const listAppointment = async (req, res) => {
    try {
        const { userId } = req.body;
        const appointments = await appointmentModel.find({ userId });
        res.json({ success: true, appointments });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to cancel appointment
const cancelAppointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);

        if (!appointmentData) {
             return res.json({ success: false, message: 'Appointment not found' });
        }

        if (appointmentData.userId !== userId) {
            return res.json({ success: false, message: 'Unauthorized action' });
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { status: "Cancelled" });
        res.json({ success: true, message: 'Appointment Cancelled' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to update appointment status (for doctor or admin)
const updateStatus = async (req, res) => {
    try {
        const { appointmentId, status } = req.body;
        await appointmentModel.findByIdAndUpdate(appointmentId, { status });
        res.json({ success: true, message: `Appointment status updated to ${status}` });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to make payment of appointment using Stripe
const paymentStripe = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const { origin } = req.headers;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData || appointmentData.status === 'Cancelled') {
            return res.json({ success: false, message: 'Appointment Cancelled or not found' });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Appointment Fees`,
                            description: `Payment for appointment ID: ${appointmentId}`
                        },
                        unit_amount: appointmentData.amount * 100, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${origin}/my-appointments?success=true&appointmentId=${appointmentId}`,
            cancel_url: `${origin}/my-appointments?success=false&appointmentId=${appointmentId}`,
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// API to verify payment of stripe
const verifyStripe = async (req, res) => {
    try {
        const { appointmentId, success } = req.body;
        
        if (success === "true") {
            await appointmentModel.findByIdAndUpdate(appointmentId, { payment: true });
            res.json({ success: true, message: 'Payment Successful' });
        } else {
            res.json({ success: false, message: 'Payment Failed' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { bookAppointment, listAppointment, cancelAppointment, updateStatus, paymentStripe, verifyStripe };