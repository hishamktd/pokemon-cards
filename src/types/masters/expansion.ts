import { NumStr } from '..';

export type Expansion = {
  id: number;
  name: string;
  totalCards: NumStr;
  imageUrl?: string | null;
};

export type ExpansionForm = Omit<Expansion, 'id' | 'imageUrl'> & {
  image: File | null;
};

export type ExpansionUpdateForm = Omit<Expansion, 'imageUrl'> & {
  image: File | null;
};
