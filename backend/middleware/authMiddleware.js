import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
  const token = req.cookies['auth'];

  if (!token) {
    res.status(401);
    throw new Error('Not authorized');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');

    next();
  } catch (err) {
    res.clearCookie('Bearer');
    res.status(401);
    throw new Error('Not authorized, token failed');
  }
};

export default protect;
