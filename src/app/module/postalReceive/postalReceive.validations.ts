import { z } from 'zod';

const create = z.object({
  body: z.object({
    toTitle: z.string({
      required_error: 'To title is required',
    }),
    fromTitle: z.string({
      required_error: 'From title is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    referenceNo: z.string({
      required_error: 'Reference no is required',
    }),
    date: z.string(),
    note: z.string(),
  }),
});

export const PostalRecive = {
  create,
};
