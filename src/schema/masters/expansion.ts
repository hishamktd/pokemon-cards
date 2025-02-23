import { z } from 'zod';

const expansionSchema = z.object({
  name: z.string().nonempty('Name is required'),
  totalCards: z
    .number()
    .int()
    .positive('Total cards must be a positive integer'),
  image: z.nullable(z.any()),
  points: z.nullable(z.string()),
});

export { expansionSchema };
