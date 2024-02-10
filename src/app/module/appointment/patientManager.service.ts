import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IPatient, IPatientFilters } from './patientManage.interface';
import { patentSearchableFields } from './patientManagement.constant';
import { Patent } from './patientManager.model';

const create = async (paylode: IPatient) => {
  console.log(paylode);

  const result = await Patent.create(paylode);
  return result;
};

const getAllData = async (
  filters: IPatientFilters,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IPatient[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: patentSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andCondation.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortCondations: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortCondations[sortBy] = sortOrder;
  }
  const requestCondetion =
    andCondation.length > 0 ? { $and: andCondation } : {};

  const result = await Patent.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await Patent.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleData = async (id: string): Promise<IPatient | null> => {
  const result = await Patent.findById(id);
  return result;
};

const updateDataById = async (
  id: string,
  paylode: IPatient
): Promise<IPatient | null> => {
  const result = await Patent.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IPatient | null> => {
  const result = await Patent.findByIdAndDelete(id);
  return result;
};

export const PatientService = {
  create,
  getAllData,
  getSingleData,
  updateDataById,
  deleteData,
};
