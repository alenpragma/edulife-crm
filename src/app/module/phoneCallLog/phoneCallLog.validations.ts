import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string(),

    phone: z.string({
      required_error: 'Phone is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    gender: z.string({
      required_error: 'Gender is required',
    }),
    note: z.string({
      required_error: 'note is required',
    }),
    nextFollowUpDate: z.string({
      required_error: 'Next follow up date is required',
    }),
    callType: z.string({
      required_error: 'Call type is required',
    }),
    description: z.string(),
    duration: z.string(),
  }),
});

export const phoneCallLogValidation = {
  create,
};
