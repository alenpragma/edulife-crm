import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationKeys } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IPatient } from './patientManage.interface';
import { patientFilterableFields } from './patientManagement.constant';
import { PatientService } from './patientManager.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  // console.log(partsData, 'this is data');

  const result = await PatientService.create(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient Created Successfully',
    data: result,
  });
});

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;

  const paginationOptions = pick(query, paginationKeys);
  const filters = pick(query, patientFilterableFields);

  const result = await PatientService.getAllData(filters, paginationOptions);
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient Retrieved Succesfully',
    data: result.data,
  });
});

const getSingleDataById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await PatientService.getSingleData(id);

  sendResponse<IPatient>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient Retrieved Successfully',
    data: result,
  });
});

const updateById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await PatientService.updateDataById(id, updatedData);

  sendResponse<IPatient>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient successfully updated',
    data: result,
  });
});

// Delete Department
const deleteData = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PatientService.deleteData(id);

  sendResponse<IPatient>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Patient deleted Successfully',
    data: result,
  });
});

export const patientController = {
  create,
  getAllData,
  getSingleDataById,
  updateById,
  deleteData,
};
