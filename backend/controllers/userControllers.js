import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// desc     Log in the user
// route    /api/users/login
// access   Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const isExists = await User.find({ email });
  if (!isExists) {
    res.status(401);
    res.clearCookie('auth', { httpOnly: true });
    throw new Error('Invalid e-mail or password');
  }

  const user = await User.findOne({ email });

  const token = generateToken(user._id);
  res.cookie('auth', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 5 });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

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
  if (!req.cookies['auth']) {
    res.clearCookie('auth');
    res.status(401);
    throw new Error('Not authorized');
  } else if (!req.user) {
    res.status(400);
    throw new Error('User not found');
  }
  // user is added to req object by authMiddleWare
  res.status(201);
  res.json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
});

export { register, getUser, login };
