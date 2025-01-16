import { z } from 'zod';

const createPacksSchema = z.object({
  name: z.string().nonempty('Name is required'),
  totalCards: z
    .number()
    .int()
    .positive('Total cards must be a positive integer'),
});

export { createPacksSchema };
