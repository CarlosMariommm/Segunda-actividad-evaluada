import { Router } from 'express';
import appointmentController from '../controllers/appointmentController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.route('/')
    .post(authMiddleware, appointmentController.create)
    .get(authMiddleware, appointmentController.getAll);

router.route('/:id')
    .get(authMiddleware, appointmentController.getById)
    .put(authMiddleware, appointmentController.update)
    .delete(authMiddleware, appointmentController.delete);

export default router;
