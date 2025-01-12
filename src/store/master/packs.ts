import { create } from 'zustand';

import { Packs } from '@/types/master/packs';

export type PacksStore = {
  entities: Packs[];
  setEntities: (entities: Packs[]) => void;
};

const usePacksStore = create<PacksStore>((set) => ({
  entities: [],
  setEntities: (entities) => set({ entities }),
}));

export default usePacksStore;
