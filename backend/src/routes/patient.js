import { Router } from 'express';
import patientController from '../controllers/patientController.js';
import upload from '../utils/multerUtil.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/register', upload.single('profilePhoto'), patientController.register);
router.post('/verify-email', patientController.verifyEmail);
router.post('/login', patientController.login);
router.post('/logout', patientController.logout);
router.post('/forgot-password', patientController.forgotPassword);
router.post('/reset-password', patientController.resetPassword);

router.route('/')
    .get(authMiddleware, patientController.getAll);

router.route('/:id')
    .get(authMiddleware, patientController.getById)
    .put(authMiddleware, upload.single('profilePhoto'), patientController.update)
    .delete(authMiddleware, patientController.delete);

export default router;
