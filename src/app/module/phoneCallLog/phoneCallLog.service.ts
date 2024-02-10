import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { phoneSearchableFields } from './phoneCallLog.constant';
import { IPhoneCallLog, IPhoneFilters } from './phoneCallLog.interface';
import { Phone } from './phoneCallLog.model';

const create = async (paylode: IPhoneCallLog) => {
  console.log(paylode);

  const result = await Phone.create(paylode);
  return result;
};

const getAllData = async (
  filters: IPhoneFilters,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IPhoneCallLog[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: phoneSearchableFields.map(field => ({
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

  const result = await Phone.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await Phone.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleData = async (id: string): Promise<IPhoneCallLog | null> => {
  const result = await Phone.findById(id);
  return result;
};

const updateDataById = async (
  id: string,
  paylode: IPhoneCallLog
): Promise<IPhoneCallLog | null> => {
  const result = await Phone.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IPhoneCallLog | null> => {
  const result = await Phone.findByIdAndDelete(id);
  return result;
};

export const phoneCallLogServices = {
  create,
  getAllData,
  getSingleData,
  updateDataById,
  deleteData,
};
