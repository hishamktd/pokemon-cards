import { z } from 'zod';

import { CardType } from '@/enum/cards';

import { v } from '../common';

const { POKEMON } = CardType;

const BaseCardsSchema = z.object({
  name: v.str(),
  cardType: v.enum(CardType),
  thumbnail: v.file(),
  description: v.strOpt(),
  expansion: v.obj(),
  expansionPosition: v.num(),
});

const PokemonCardsSchema = BaseCardsSchema.extend({
  cardType: v.literal(POKEMON),
  pokemon: v.obj(),
  type: v.obj(),
  isEx: v.bool(),
  isFossil: v.bool(),
});

export const CardsSchema = z.discriminatedUnion('cardType', [
  PokemonCardsSchema,
]);
