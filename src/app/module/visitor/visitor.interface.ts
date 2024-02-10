import { Model } from 'mongoose';

export type IVisitor = {
  name: string;
  purpose: string;
  phone: string;
  meetingWith: string;
  gender: string;
  address: string;
  personsCount: string;
  inTime: string;
  outTime: string;
  date: string;
  note: string;
};

export type VisitorModal = Model<IVisitor, unknown>;

export type IVisitorFilters = {
  searchTerm?: string;
  name?: string;
};
