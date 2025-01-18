import { z } from 'zod';

const createTypesSchema = z.object({
  name: z.string().nonempty('Name is required'),
});

const updateTypesSchema = z.object({
  id: z.number(),
  name: z.string().nonempty('Name is required'),
});

export { createTypesSchema, updateTypesSchema };
