import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { register, getUser, login } from '../controllers/userControllers.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/').get(protect, getUser);

export default router;
