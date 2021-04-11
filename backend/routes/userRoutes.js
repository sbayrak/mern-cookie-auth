import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { register, getUser } from '../controllers/userControllers.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/').get(protect, getUser);

export default router;
