import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers;
        if (!atoken) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
        }
        // Assuming admin token is signed with admin email + password
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
        if (token_decode.data !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};
export default authAdmin;