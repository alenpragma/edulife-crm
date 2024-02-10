import { Model } from 'mongoose';

export type IPostalReceive = {
  toTitle: string;
  referenceNo: string;
  address: string;
  note: string;
  fromTitle: string;
  date: string;
};

export type PostalReceiveModal = Model<IPostalReceive, unknown>;

export type IPostalReceiveFilters = {
  searchTerm?: string;
  toTitle?: string;
  referenceNo?: string;
  date?: string;
};
