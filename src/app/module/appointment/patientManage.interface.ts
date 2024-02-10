import { Model } from 'mongoose';

export type IPatient = {
  doctor: string;
  phone: string;
  visitType: string;
};

export type PatientModal = Model<IPatient, unknown>;

export type IPatientFilters = {
  searchTerm?: string;
  name?: string;
};
