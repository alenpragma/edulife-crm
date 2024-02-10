import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationKeys } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { postalDispatchFilterableFields } from './postalDispatch.constant';
import { IPostalDispatch } from './postalDispatch.interface';
import { postalDispatchService } from './postalDispatch.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await postalDispatchService.create(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Dispatch Created Successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;

  const paginationOptions = pick(query, paginationKeys);
  const filters = pick(query, postalDispatchFilterableFields);

  const result = await postalDispatchService.getAllData(
    filters,
    paginationOptions
  );
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Dispatch Retrieved Succesfully',
    data: result,
  });
});

const getSingleDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await postalDispatchService.getSingleData(id);

  sendResponse<IPostalDispatch>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Dispatch Retrieved Successfully',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await postalDispatchService.updateDataById(id, updatedData);

  sendResponse<IPostalDispatch>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Dispatch successfully updated',
    data: result,
  });
});

// Delete Department
const deleteData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await postalDispatchService.deleteData(id);

  sendResponse<IPostalDispatch>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Postal Dispatch deleted Successfully',
    data: result,
  });
});

export const postalDispatchController = {
  create,
  getAllData,
  getSingleDataById,
  updateById,
  deleteData,
};
