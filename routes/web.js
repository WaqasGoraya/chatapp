import express from 'express';
import uploadStorage from '../config/multerConfig.js';
import authController from '../controllers/authController.js';
import upload from '../../amazone/amazone/config/multerConfig.js';
const router = express.Router();

router.get('/register',authController.register);
router.post('/register', uploadStorage.single('image'), authController.save);
router.get('/login',authController.login);
router.post('/login',authController.auth);

export default router;