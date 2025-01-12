import { create } from 'zustand';

import { getPacks } from '@/actions/master/packs/entities';
import { Packs } from '@/types/master/packs';

export type PacksStore = {
  entities: Packs[];
  loading: boolean;
  error: string | null;
  fetchEntities: () => Promise<void>;
};

const usePacksStore = create<PacksStore>((set) => ({
  entities: [],
  loading: false,
  error: null,

  fetchEntities: async () => {
    set({ loading: true, error: null });
    try {
      const entities = await getPacks();
      set({ entities, loading: false });
    } catch (error) {
      console.error('Error fetching entities:', error);
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default usePacksStore;
