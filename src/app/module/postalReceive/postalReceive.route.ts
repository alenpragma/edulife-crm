import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { postalReceiveController } from './postalReceive.controller';
import { PostalRecive } from './postalReceive.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(PostalRecive.create),
  postalReceiveController.create
);

router.get('/:id', postalReceiveController.getSingleDataById);

router.patch('/:id', postalReceiveController.updateById);

router.delete('/:id', postalReceiveController.deleteData);

router.get('/', postalReceiveController.getAllData);

export const postalReceive = router;
