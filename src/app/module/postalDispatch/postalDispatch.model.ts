import { Schema, model } from 'mongoose';
import {
  IPostalDispatch,
  PostalDispatchModal,
} from './postalDispatch.interface';

const postalDispatchSchema = new Schema(
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

export const PostalDispatch = model<IPostalDispatch, PostalDispatchModal>(
  'postal-dispatch',
  postalDispatchSchema
);
