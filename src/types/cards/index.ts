import { CardType } from '@/enum/cards';
import { Types } from '@/types/masters/types';
import { Pokemon } from '@/types/pokemon';

import { Nullable } from '..';

export type Card = {
  id: number;
  name: string;
  imageUrl: string;
  type: Nullable<Types>;
  pokemon: Nullable<Pokemon>;
  description?: string;
  isEx: boolean;
  isFossil: boolean;
  cardType: CardType;
};

export type CardsForm = Omit<Card, 'id' | 'imageUrl' | 'pokemon' | 'type'> & {
  image: Nullable<File>;
  pokemon: Nullable<Pokemon>;
  type: Nullable<Types>;
};

export type CardsCreateReq = Omit<Card, 'id' | 'pokemon' | 'type'> & {
  pokemonId: Nullable<number>;
  typeId: Nullable<number>;
};

export type CardsUpdateReq = CardsCreateReq & {
  id: number;
};
