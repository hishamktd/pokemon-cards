import { toast } from 'react-hot-toast';
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
      toast.error('Failed to fetch packs. Please try again.');
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
        toast.error(
          'Failed to create packs. Please check the form for errors.',
        );
      } else {
        set({ updating: false, updateSuccess: true });
        toast.success('Pack created successfully!');
      }
    } catch (error) {
      set({ updating: false, updateSuccess: false });
      console.error('Error creating packs:', error);
      toast.error(
        'An error occurred while creating the pack. Please try again.',
      );
    }
  },
}));

export default usePacksStore;
