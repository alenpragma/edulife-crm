import express from 'express';
import { postalReceiveController } from './postalReceive.controller';

const router = express.Router();

router.post('/', postalReceiveController.create);

router.get('/:id', postalReceiveController.getSingleDataById);

router.patch('/:id', postalReceiveController.updateById);

router.delete('/:id', postalReceiveController.deleteData);

router.get('/', postalReceiveController.getAllData);

export const postalReceive = router;
