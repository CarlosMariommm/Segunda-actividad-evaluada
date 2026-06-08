import { Router } from 'express';
import recordController from '../controllers/recordController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.route('/')
    .post(authMiddleware, recordController.create)
    .get(authMiddleware, recordController.getAll);

router.route('/:id')
    .get(authMiddleware, recordController.getById)
    .put(authMiddleware, recordController.update)
    .delete(authMiddleware, recordController.delete);

export default router;
