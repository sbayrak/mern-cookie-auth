import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { register } from '../controllers/userControllers.js';
const router = express.Router();

router.route('/register').post(register);

export default router;
