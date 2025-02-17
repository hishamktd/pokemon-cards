import { z } from 'zod';

const createExpansionSchema = z.object({
  name: z.string().nonempty('Name is required'),
  totalCards: z
    .number()
    .int()
    .positive('Total cards must be a positive integer'),
  image: z.nullable(z.any()),
});

const updateExpansionSchema = z.object({
  name: z.string().nonempty('Name is required'),
  totalCards: z
    .number()
    .int()
    .positive('Total cards must be a positive integer'),
  image: z.nullable(z.any()),
  id: z.number(),
  imageUrl: z.string().nullable(),
});

export { createExpansionSchema, updateExpansionSchema };
