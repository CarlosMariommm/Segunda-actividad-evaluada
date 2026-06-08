import { Router } from 'express';
import equipmentController from '../controllers/equipmentController.js';
import upload from '../utils/multerUtil.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.route('/')
    .post(authMiddleware, upload.single('image'), equipmentController.create)
    .get(authMiddleware, equipmentController.getAll);

router.route('/:id')
    .get(authMiddleware, equipmentController.getById)
    .put(authMiddleware, upload.single('image'), equipmentController.update)
    .delete(authMiddleware, equipmentController.delete);

export default router;
