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
      required: [true, 'meetingWith is required'],
    },
    gender: {
      type: String,
      required: [true, 'gender is required'],
    },
    phone: { type: String },
    personsCount: { type: String },
    inTime: { type: String },
    outTime: { type: String },
    note: { type: String },
    address: { type: String },
    date: { type: String },
  },
  { timestamps: true }
);
export const Visitor = model<IVisitor, VisitorModal>('visitors', patientSchema);
