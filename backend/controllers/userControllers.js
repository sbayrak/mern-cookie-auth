import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// desc     Register User
// route    /api/users/register
// access   Public
const register = asyncHandler(async (req, res) => {
  let { name, email, password } = req.body;

  const isUserExists = await User.findOne({ email });
  if (isUserExists) {
    res.status(400);
    throw new Error('Invalid e-mail or password');
  }

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = generateToken(user._id);
  res.cookie('auth', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 3, // 3 dayss
  });

  res.status(200);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  res.json(user);
  console.log(req.cookies);
});

export { register, getUser };
