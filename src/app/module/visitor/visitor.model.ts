import { Schema, model } from 'mongoose';
import { IVisitor, VisitorModal } from './visitor.interface';

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    purpose: {
      type: String,
      required: [true, 'purpose is required'],
    },
    meetingWith: {
      type: String,
      required: [true, 'Meeting With is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    personsCount: {
      type: String,
      required: [true, 'Persons count is required'],
    },
    date: {
      type: String,
      required: [true, 'Date is required'],
    },
    gender: { type: String },
    inTime: { type: String },
    outTime: { type: String },
    note: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);
export const Visitor = model<IVisitor, VisitorModal>('visitors', patientSchema);
