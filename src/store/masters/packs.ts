import { ZodError } from 'zod';
import { create } from 'zustand';

import { getPacks } from '@/actions/master/packs';
import createPacks from '@/actions/master/packs/create';
import { BaseParams } from '@/types';
import { Packs, PacksForm } from '@/types/masters/packs';
import { PAGE_SIZE } from '@/utils/pagination';

export type PacksStore = {
  entities: Packs[];
  loading: boolean;
  totalCount: number;
  error: string | null;
  updating: boolean;
  updateSuccess: boolean;
  formError: ZodError<PacksForm> | null;
  fetchPacks: (params: BaseParams) => Promise<void>;
  createPacks: (data: PacksForm) => Promise<void>;
};

const usePacksStore = create<PacksStore>((set) => ({
  entities: [],
  loading: false,
  error: null,
  totalCount: 0,
  updating: false,
  updateSuccess: false,
  formError: null,

  fetchPacks: async ({ page, size = PAGE_SIZE, query = '' }) => {
    set({ loading: true, error: null });
    try {
      const { data, totalCount } = await getPacks({ page, size, query });

      set({ entities: data, loading: false, totalCount });
    } catch (error) {
      console.error('Error fetching entities:', error);

      set({ error: (error as Error).message, loading: false });
    }
  },

  createPacks: async (data) => {
    try {
      set({ updating: true, updateSuccess: false, formError: null });
      const response = await createPacks(data);

      if (!response.success) {
        set({
          updating: false,
          updateSuccess: false,
          formError: response?.zodError,
        });
      } else {
        set({ updating: false, updateSuccess: true });
      }
    } catch (error) {
      set({ updating: false, updateSuccess: false });
      console.error('Error creating packs:', error);
    }
  },
}));

export default usePacksStore;
