import { NumStr } from '..';

export type Packs = {
  id: number;
  name: string;
  totalCards: NumStr;
  thumbnailUrl?: string | null;
};

export type PacksForm = Omit<Packs, 'id' | 'thumbnailUrl'> & {
  thumbnail: File | null;
};
