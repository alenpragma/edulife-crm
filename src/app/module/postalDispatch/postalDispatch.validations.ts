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
    gender: z.string({
      required_error: 'Gender is required',
    }),
    personsCount: z.string({
      required_error: 'Persons Count is required',
    }),
    inTime: z.string({
      required_error: 'inTime is required',
    }),
    outTime: z.string({
      required_error: 'outTime is required',
    }),
    note: z.string({
      required_error: 'note is required',
    }),
    date: z.string({
      required_error: 'note is required',
    }),
    address: z.string(),
  }),
});

export const PostalDispatch = {
  create,
};
