import { Schema, model } from 'mongoose';
import { IPostalReceive, PostalReceiveModal } from './postalReceive.interface';

const postalReceiveSchema = new Schema(
  {
    toTitle: {
      type: String,
      required: [true, 'To Title is required'],
    },
    fromTitle: {
      type: String,
      required: [true, 'From Title is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    referenceNo: {
      type: String,
      required: [true, 'Reference No is required'],
    },
    date: { type: String },
    note: { type: String },
  },
  { timestamps: true }
);

export const PostalReceive = model<IPostalReceive, PostalReceiveModal>(
  'postal-Receive',
  postalReceiveSchema
);
