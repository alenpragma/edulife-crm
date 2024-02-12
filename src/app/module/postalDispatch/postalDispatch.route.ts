import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { postalDispatchController } from './postalDispatch.controller';
import { PostalDispatch } from './postalDispatch.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(PostalDispatch.create),
  postalDispatchController.create
);

router.get('/:id', postalDispatchController.getSingleDataById);

router.patch('/:id', postalDispatchController.updateById);

router.delete('/:id', postalDispatchController.deleteData);

router.get('/', postalDispatchController.getAllData);

export const postalDispatch = router;
