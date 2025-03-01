import { Nullable } from '..';
import { Types } from '../masters/types';

export type Pokemon = {
  id: number;
  name: string;
  imageUrl: Nullable<string>;
  type: Types;
  typeId: number;
};

export type PokemonForm = Omit<Pokemon, 'typeId' | 'id' | 'type'> & {
  image: Nullable<File>;
  type: Nullable<Types>;
};

export type PokemonCreateRequest = Omit<Pokemon, 'id' | 'type'>;

export type PokemonUpdateRequest = Omit<Pokemon, 'type'>;
