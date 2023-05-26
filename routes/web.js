import express from 'express';
import uploadStorage from '../config/multerConfig.js';
import authController from '../controllers/authController.js';
const router = express.Router();

router.get('/login',authController.register);
router.get('/login',authController.login);

export default router;