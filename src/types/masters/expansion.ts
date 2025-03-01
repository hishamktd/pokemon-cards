import { Nullable, NumStr } from '..';

export type ExpansionAll = {
  id: number;
  name: string;
};

export type Expansion = {
  id: number;
  name: string;
  totalCards: NumStr;
  imageUrl?: string | null;
  points: Nullable<string>;
};

export type ExpansionCreate = Omit<Expansion, 'id'>;

export type ExpansionForm = Omit<Expansion, 'id'> & {
  image: File | null;
};

export type ExpansionUpdateForm = Omit<Expansion, 'imageUrl'> & {
  image: File | null;
};
