import { create } from 'zustand';

import { getPacks } from '@/actions/master/packs/entities';
import { BaseParams } from '@/types';
import { Packs } from '@/types/master/packs';
import { PAGE_SIZE } from '@/utils/pagination';

export type PacksStore = {
  entities: Packs[];
  loading: boolean;
  totalCount: number;
  error: string | null;
  fetchEntities: (params: BaseParams) => Promise<void>;
};

const usePacksStore = create<PacksStore>((set) => ({
  entities: [],
  loading: false,
  error: null,
  totalCount: 0,

  fetchEntities: async ({ page, size = PAGE_SIZE }) => {
    set({ loading: true, error: null });
    try {
      const { data, totalCount } = await getPacks(page, size);

      set({ entities: data, loading: false, totalCount });
    } catch (error) {
      console.error('Error fetching entities:', error);

      set({ error: (error as Error).message, loading: false });
    }
  },
}));

export default usePacksStore;
