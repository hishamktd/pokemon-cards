import { z } from 'zod';

const createPacksSchema = z.object({
  name: z.string().nonempty('Name is required'),
  totalCards: z
    .number()
    .int()
    .positive('Total cards must be a positive integer'),
  thumbnail: z.nullable(z.any()),
});

const updatePacksSchema = z.object({
  name: z.string().nonempty('Name is required'),
  totalCards: z
    .number()
    .int()
    .positive('Total cards must be a positive integer'),
  thumbnail: z.nullable(z.any()),
  id: z.number(),
  thumbnailUrl: z.string().nullable(),
});

export { createPacksSchema, updatePacksSchema };
