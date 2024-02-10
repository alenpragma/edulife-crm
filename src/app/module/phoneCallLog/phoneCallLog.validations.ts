import { z } from 'zod';
import { callType } from './phoneCallLog.constant';

const create = z.object({
  body: z.object({
    name: z.string(),
    phone: z.string({
      required_error: 'Phone is required',
    }),
    gender: z.string({
      required_error: 'Gender is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    note: z.string({
      required_error: 'note is required',
    }),
    nextFollowUpDate: z.string({
      required_error: 'Next follow up date is required',
    }),
    duration: z.string(),

    callType: z.string({
      required_error: 'Call type is required',
    }),
    bloodGroup: z.enum([...callType, '', null] as unknown as [
      string,
      ...string[]
    ]),
  }),
});

export const PatientValidation = {
  create,
};
