import { Schema, model } from 'mongoose';
import { IPatient, PatientModal } from './patientManage.interface';

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    age: {
      type: String,
      required: [true, 'Age is required'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
    },
    weight: {
      type: String,
      required: [true, 'weight is required'],
    },
    height: {
      type: String,
      required: [true, 'height is required'],
    },
    bmi: {
      type: String,
      required: [true, 'bmi is required'],
    },
    address: { type: String },
    email: { type: String },
    bloodGroup: { type: String },
  },
  { timestamps: true }
);
export const Patent = model<IPatient, PatientModal>('Patients', patientSchema);
