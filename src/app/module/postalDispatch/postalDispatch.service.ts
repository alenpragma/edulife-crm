import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { postalDispatchSearchableFields } from './postalDispatch.constant';
import {
  IPostalDispatch,
  IPostalDispatchFilters,
} from './postalDispatch.interface';
import { PostalDispatch } from './postalDispatch.model';

const create = async (paylode: IPostalDispatch) => {
  console.log(paylode);

  const result = await PostalDispatch.create(paylode);
  return result;
};

const getAllData = async (
  filters: IPostalDispatchFilters,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IPostalDispatch[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: postalDispatchSearchableFields.map(field => ({
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

  const result = await PostalDispatch.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await PostalDispatch.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleData = async (id: string): Promise<IPostalDispatch | null> => {
  const result = await PostalDispatch.findById(id);
  return result;
};

const updateDataById = async (
  id: string,
  paylode: IPostalDispatch
): Promise<IPostalDispatch | null> => {
  const result = await PostalDispatch.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IPostalDispatch | null> => {
  const result = await PostalDispatch.findByIdAndDelete(id);
  return result;
};

export const postalDispatchService = {
  create,
  getAllData,
  getSingleData,
  updateDataById,
  deleteData,
};
