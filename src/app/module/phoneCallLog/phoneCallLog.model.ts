import { Schema, model } from 'mongoose';
import { IPhoneCallLog, PhoneCallLogModal } from './phoneCallLog.interface';

const phoneCallLogSchema = new Schema(
  {
    name: { type: String },

    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    date: {
      type: String,
      required: [true, 'date is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    nextFollowUpDate: {
      type: String,
      required: [true, 'Next Follow Up Date is required'],
    },
    duration: { type: String },
    note: {
      type: String,
      required: [true, 'note is required'],
    },
    callType: {
      type: String,
      required: [true, 'Call type is required'],
    },
  },
  { timestamps: true }
);
export const Phone = model<IPhoneCallLog, PhoneCallLogModal>(
  'phones',
  phoneCallLogSchema
);
