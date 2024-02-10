import { Model } from 'mongoose';

export type IPhoneCallLog = {
  name: string;
  phone: string;
  date: string;
  description: string;
  nextFollowUpDate: string;
  duration: string;
  note: string;
  callType: string;
};

export type PhoneCallLogModal = Model<IPhoneCallLog, unknown>;

export type IPhoneFilters = {
  searchTerm?: string;
  name?: string;
  phone?: string;
};
