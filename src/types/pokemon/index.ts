import { Stage } from '@/enum/pokemon';

import { BaseOption, Nullable } from '..';
import { Types } from '../masters/types';

export type Pokemon = {
  id: number;
  name: string;
  imageUrl: Nullable<string>;
  type: Types;
  typeId: number;
  stage: Stage;
  evolvedFromId: Nullable<number>;
  evolvedFrom: Nullable<Pokemon>;
};

export type PokemonForm = Omit<
  Pokemon,
  'typeId' | 'id' | 'type' | 'evolvedFromId' | 'stage'
> & {
  image: Nullable<File>;
  type: Nullable<Types>;
  stage: BaseOption;
};

export type PokemonCreateRequest = Omit<Pokemon, 'id' | 'type' | 'evolvedFrom'>;

export type PokemonUpdateRequest = Omit<Pokemon, 'type' | 'evolvedFrom'>;

export type GetAllPokemonParams = {
  stage?: Stage;
};
