import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    purpose: z.string({
      required_error: 'Purpose is required',
    }),
    meetingWith: z.string({
      required_error: 'Meeting With is required',
    }),
    phone: z.string({
      required_error: 'Phone is required',
    }),
    personsCount: z.string({
      required_error: 'Persons Count is required',
    }),
    date: z.string({
      required_error: 'note is required',
    }),
    gender: z.string(),
    inTime: z.string(),
    outTime: z.string(),
    note: z.string(),
    address: z.string(),
  }),
});

export const visitorValidation = {
  create,
};
