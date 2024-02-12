import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { visitorController } from './visitor.controller';
import { visitorValidation } from './visitor.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(visitorValidation.create),
  visitorController.create
);

router.get('/:id', visitorController.getSingleDataById);

router.patch('/:id', visitorController.updateById);

router.delete('/:id', visitorController.deleteData);

router.get('/', visitorController.getAllData);

export const visitorRoutes = router;
