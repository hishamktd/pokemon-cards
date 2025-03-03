import { z } from 'zod';

import { Gender, Stage } from '@/enum/pokemon';

const { BASIC } = Stage;

const pokemonSchema = z
  .object({
    name: z.string().nonempty({ message: 'Name is required' }),
    type: z
      .object({ id: z.number(), name: z.string() })
      .refine(
        (data) => data.id !== undefined && data.name !== undefined,
        'Type is required',
      ),
    image: z.nullable(z.any()),
    stage: z.object({
      id: z.nativeEnum(Stage),
      name: z.string(),
    }),
    gender: z.nativeEnum(Gender),
    evolvedFrom: z.object({ id: z.number(), name: z.string() }).nullable(),
    isFossil: z.boolean(),
  })
  .refine((data) => data.stage.id === BASIC || data.evolvedFrom !== null, {
    message: 'EvolvedFrom is required for non-Basic Pokémon',
    path: ['evolvedFrom'],
  });

export { pokemonSchema };
