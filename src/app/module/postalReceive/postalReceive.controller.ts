import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationKeys } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { postalReceiveFilterableFields } from './postalReceive.constant';
import { IPostalReceive } from './postalReceive.interface';
import { postalReceiveService } from './postalReceive.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await postalReceiveService.create(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Receive Created Successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;

  const paginationOptions = pick(query, paginationKeys);
  const filters = pick(query, postalReceiveFilterableFields);

  const result = await postalReceiveService.getAllData(
    filters,
    paginationOptions
  );
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Receive Retrieved Succesfully',
    data: result,
  });
});

const getSingleDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await postalReceiveService.getSingleData(id);

  sendResponse<IPostalReceive>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Receive Retrieved Successfully',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await postalReceiveService.updateDataById(id, updatedData);

  sendResponse<IPostalReceive>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Receive successfully updated',
    data: result,
  });
});

// Delete Department
const deleteData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await postalReceiveService.deleteData(id);

  sendResponse<IPostalReceive>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Receive deleted Successfully',
    data: result,
  });
});

export const postalReceiveController = {
  create,
  getAllData,
  getSingleDataById,
  updateById,
  deleteData,
};
