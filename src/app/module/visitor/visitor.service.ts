import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { visitorSearchableFields } from './visitor.constant';
import { IVisitor, IVisitorFilters } from './visitor.interface';
import { Visitor } from './visitor.model';

const create = async (paylode: IVisitor) => {
  console.log(paylode);

  const result = await Visitor.create(paylode);
  return result;
};

const getAllData = async (
  filters: IVisitorFilters,
  pageinationOptions: IPaginationOptions
): Promise<IGenericResponse<IVisitor[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: visitorSearchableFields.map(field => ({
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

  const result = await Visitor.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await Visitor.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleData = async (id: string): Promise<IVisitor | null> => {
  const result = await Visitor.findById(id);
  return result;
};

const updateDataById = async (
  id: string,
  paylode: IVisitor
): Promise<IVisitor | null> => {
  const result = await Visitor.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IVisitor | null> => {
  const result = await Visitor.findByIdAndDelete(id);
  return result;
};

export const visitorService = {
  create,
  getAllData,
  getSingleData,
  updateDataById,
  deleteData,
};
