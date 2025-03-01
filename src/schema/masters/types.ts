import { z } from 'zod';

const typesSchema = z.object({
  name: z.string().nonempty('Name is required'),
  color: z.string().nonempty('Color is required'),
  icon: z.nullable(z.any()),
});

export { typesSchema };
