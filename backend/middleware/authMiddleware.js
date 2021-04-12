import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies['auth'];

  if (!token) {
    res.status(401);
    throw new Error('Not authorized');
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
      res.clearCookie('auth');
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }
});

export default protect;
