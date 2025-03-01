import { Nullable, NumStr } from '..';

export type Expansion = {
  id: number;
  name: string;
  totalCards: NumStr;
  imageUrl?: Nullable<string>;
  points: Nullable<string>;
};

export type ExpansionCreate = Omit<Expansion, 'id'>;

export type ExpansionForm = Omit<Expansion, 'id'> & {
  image: Nullable<File>;
};

export type ExpansionUpdateForm = Omit<Expansion, 'imageUrl'> & {
  image: Nullable<File>;
};
