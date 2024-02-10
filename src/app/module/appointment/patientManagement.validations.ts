import { z } from 'zod';
import { bloodGroup } from './patientManagement.constant';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    phone: z.string({
      required_error: 'Phone is required',
    }),
    email: z.string(),
    age: z.string({
      required_error: 'Age is required',
    }),
    gender: z.string({
      required_error: 'Gender is required',
    }),
    weight: z.string({
      required_error: 'Weight is required',
    }),
    bmi: z.string({
      required_error: 'Bmi is required',
    }),
    address: z.string(),
    bloodGroup: z
      .enum([...bloodGroup, '', null] as unknown as [string, ...string[]])
      .optional(),

    // bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
  }),
});

export const PatientValidation = {
  create,
};
