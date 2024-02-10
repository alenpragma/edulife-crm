import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { postalReceiveSearchableFields } from './postalReceive.constant';
import {
  IPostalReceive,
  IPostalReceiveFilters,
} from './postalReceive.interface';
import { PostalReceive } from './postalReceive.model';

const create = async (paylode: IPostalReceive) => {
  console.log(paylode);

  const result = await PostalReceive.create(paylode);
  return result;
};

const getAllData = async (
  filters: IPostalReceiveFilters,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IPostalReceive[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: postalReceiveSearchableFields.map(field => ({
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

  const result = await PostalReceive.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await PostalReceive.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleData = async (id: string): Promise<IPostalReceive | null> => {
  const result = await PostalReceive.findById(id);
  return result;
};

const updateDataById = async (
  id: string,
  paylode: IPostalReceive
): Promise<IPostalReceive | null> => {
  const result = await PostalReceive.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IPostalReceive | null> => {
  const result = await PostalReceive.findByIdAndDelete(id);
  return result;
};

export const postalReceiveService = {
  create,
  getAllData,
  getSingleData,
  updateDataById,
  deleteData,
};
