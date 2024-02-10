import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationKeys } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { phoneFilterableFields } from './phoneCallLog.constant';
import { IPhoneCallLog } from './phoneCallLog.interface';
import { phoneCallLogServices } from './phoneCallLog.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await phoneCallLogServices.create(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Phone Call Log saved Successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;

  const paginationOptions = pick(query, paginationKeys);
  const filters = pick(query, phoneFilterableFields);

  const result = await phoneCallLogServices.getAllData(
    filters,
    paginationOptions
  );
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Phone Call Log Retrieved Succesfully',
    data: result,
  });
});

const getSingleDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await phoneCallLogServices.getSingleData(id);

  sendResponse<IPhoneCallLog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Phone Call Log Retrieved Successfully',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await phoneCallLogServices.updateDataById(id, updatedData);

  sendResponse<IPhoneCallLog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Phone Call Log successfully updated',
    data: result,
  });
});

// Delete Department
const deleteData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await phoneCallLogServices.deleteData(id);

  sendResponse<IPhoneCallLog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Phone Call Log deleted Successfully',
    data: result,
  });
});

export const phoneController = {
  create,
  getAllData,
  getSingleDataById,
  updateById,
  deleteData,
};
