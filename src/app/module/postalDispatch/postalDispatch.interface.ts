import { Model } from 'mongoose';

export type IPostalDispatch = {
  toTitle: string;
  referenceNo: string;
  address: string;
  note: string;
  fromTitle: string;
  date: string;
};

export type PostalDispatchModal = Model<IPostalDispatch, unknown>;

export type IPostalDispatchFilters = {
  searchTerm?: string;
  toTitle?: string;
  referenceNo?: string;
  date?: string;
};
