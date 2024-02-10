import express from 'express';
import { phoneController } from './phoneCallLog.controller';

const router = express.Router();

router.post('/', phoneController.create);

router.get('/:id', phoneController.getSingleDataById);

router.patch('/:id', phoneController.updateById);

router.delete('/:id', phoneController.deleteData);

router.get('/', phoneController.getAllData);

export const PhoneRoutes = router;
