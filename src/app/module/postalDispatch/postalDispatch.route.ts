import express from 'express';
import { postalDispatchController } from './postalDispatch.controller';

const router = express.Router();

router.post('/', postalDispatchController.create);

router.get('/:id', postalDispatchController.getSingleDataById);

router.patch('/:id', postalDispatchController.updateById);

router.delete('/:id', postalDispatchController.deleteData);

router.get('/', postalDispatchController.getAllData);

export const postalDispatch = router;
