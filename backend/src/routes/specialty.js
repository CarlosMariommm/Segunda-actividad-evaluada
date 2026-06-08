import { Router } from 'express';
import specialtyController from '../controllers/specialtyController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.route('/')
    .post(authMiddleware, specialtyController.create)
    .get(authMiddleware, specialtyController.getAll);

router.route('/:id')
    .get(authMiddleware, specialtyController.getById)
    .put(authMiddleware, specialtyController.update)
    .delete(authMiddleware, specialtyController.delete);

export default router;
