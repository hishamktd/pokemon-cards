import { z } from 'zod';

import { CardType } from '@/enum/cards';

const { POKEMON } = CardType;

const BaseCardsSchema = z.object({
  name: z.string().nonempty('Name is required'),
  cardType: z.nativeEnum(CardType),
  image: z.nullable(z.any()),
  description: z.string().optional(),
  expansion: z.object({ id: z.number(), name: z.string() }),
});

const PokemonCardsSchema = BaseCardsSchema.extend({
  cardType: z.literal(POKEMON),
  pokemon: z.object({
    id: z.number(),
    name: z.string(),
  }),
  type: z.object({
    id: z.number(),
    name: z.string(),
  }),
  isEx: z.boolean(),
  isFossil: z.boolean(),
});

export const CardsSchema = z.discriminatedUnion('cardType', [
  PokemonCardsSchema,
]);
