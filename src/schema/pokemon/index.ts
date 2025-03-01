import { z } from 'zod';

const pokemonSchema = z.object({
  name: z.string().nonempty('Name is required'),
  type: z
    .object({ id: z.number(), name: z.string() })
    .refine(
      (data) => data.id !== undefined && data.name !== undefined,
      'Type is required',
    ),
  image: z.nullable(z.any()),
});

export { pokemonSchema };
