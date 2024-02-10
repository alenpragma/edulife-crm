import express from 'express';
import { visitorController } from './visitor.controller';

const router = express.Router();

router.post('/', visitorController.create);

router.get('/:id', visitorController.getSingleDataById);

router.patch('/:id', visitorController.updateById);

router.delete('/:id', visitorController.deleteData);

router.get('/', visitorController.getAllData);

export const visitorRoutes = router;
