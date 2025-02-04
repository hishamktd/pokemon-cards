import { NumStr } from '..';

export type Expansion = {
  id: number;
  name: string;
  totalCards: NumStr;
  thumbnailUrl?: string | null;
};

export type ExpansionForm = Omit<Expansion, 'id' | 'thumbnailUrl'> & {
  thumbnail: File | null;
};

export type ExpansionUpdateForm = Omit<Expansion, 'thumbnailUrl'> & {
  thumbnail: File | null;
};
