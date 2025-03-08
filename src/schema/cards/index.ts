import { z } from 'zod';

export const CardsSchema = z.object({
  name: z.string().nonempty('Name is required'),
});
