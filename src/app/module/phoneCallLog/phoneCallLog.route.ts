import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { phoneController } from './phoneCallLog.controller';
import { phoneCallLogValidation } from './phoneCallLog.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(phoneCallLogValidation.create),
  phoneController.create
);

router.get('/:id', phoneController.getSingleDataById);

router.patch('/:id', phoneController.updateById);

router.delete('/:id', phoneController.deleteData);

router.get('/', phoneController.getAllData);

export const PhoneRoutes = router;
