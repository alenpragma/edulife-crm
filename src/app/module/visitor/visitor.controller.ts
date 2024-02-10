import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationKeys } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { visitorFilterableFields } from './visitor.constant';
import { IVisitor } from './visitor.interface';
import { visitorService } from './visitor.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await visitorService.create(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Visitor Created Successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;

  const paginationOptions = pick(query, paginationKeys);
  const filters = pick(query, visitorFilterableFields);

  const result = await visitorService.getAllData(filters, paginationOptions);
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Visitor Retrieved Succesfully',
    data: result,
  });
});

const getSingleDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await visitorService.getSingleData(id);

  sendResponse<IVisitor>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Visitor Retrieved Successfully',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await visitorService.updateDataById(id, updatedData);

  sendResponse<IVisitor>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Visitor successfully updated',
    data: result,
  });
});

// Delete Department
const deleteData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await visitorService.deleteData(id);

  sendResponse<IVisitor>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Visitor deleted Successfully',
    data: result,
  });
});

export const visitorController = {
  create,
  getAllData,
  getSingleDataById,
  updateById,
  deleteData,
};
