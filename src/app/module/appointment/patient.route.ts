import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PatientValidation } from './patientManagement.validations';
import { patientController } from './patientManager.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(PatientValidation.create),
  patientController.create
);

router.get('/:id', patientController.getSingleDataById);

router.patch('/:id', patientController.updateById);

router.delete('/:id', patientController.deleteData);

router.get('/', patientController.getAllData);

export const PatientRoutes = router;
