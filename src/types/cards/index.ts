import { CardType } from '@/enum/cards';
import { Types } from '@/types/masters/types';
import { Pokemon } from '@/types/pokemon';

import { Nullable, NumStr } from '..';
import { Expansion } from '../masters/expansion';

export type Card = {
  id: number;
  name: string;
  thumbnailUrl: string;
  expansion: Expansion;
  description?: string;
  cardType: CardType;
  expansionPosition: NumStr;

  type: Nullable<Types>;
  pokemon: Nullable<Pokemon>;
  isEx: boolean;
};

export type CardsForm = Omit<
  Card,
  'id' | 'thumbnailUrl' | 'pokemon' | 'type' | 'expansion'
> & {
  thumbnail: Nullable<File>;
  pokemon: Nullable<Pokemon>;
  type: Nullable<Types>;
  expansion: Nullable<Expansion>;
};

export type CardsCreateReq = Omit<
  Card,
  'id' | 'pokemon' | 'type' | 'expansion'
> & {
  pokemonId: Nullable<number>;
  typeId: Nullable<number>;
  expansionId: number;
};

export type CardsUpdateReq = CardsCreateReq & {
  id: number;
};
