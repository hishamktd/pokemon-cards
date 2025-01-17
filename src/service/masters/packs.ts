import { toast } from 'react-hot-toast';

import { getPacks } from '@/actions/master/packs';
import createPacks from '@/actions/master/packs/create';
import { PacksStore } from '@/store/masters/packs';
import { BaseParams, SetFunc } from '@/types';
import { PacksForm } from '@/types/masters/packs';
import { PAGE_SIZE } from '@/utils/pagination';

export const fetchPacksAction = async (
  set: SetFunc<PacksStore>,
  { page, size = PAGE_SIZE, query = '' }: BaseParams,
) => {
  set({ loading: true, error: null });
  try {
    const { data, totalCount } = await getPacks({ page, size, query });

    set({ entities: data, loading: false, totalCount });
  } catch (error) {
    console.error('Error fetching entities:', error);

    set({ error: (error as Error).message, loading: false });
    toast.error('Failed to fetch packs. Please try again.');
  }
};

export const createPacksAction = async (set: SetFunc<PacksStore>, data: PacksForm) => {
  try {
    set({ updating: true, updateSuccess: false, formError: null });
    const response = await createPacks(data);

    if (!response.success) {
      set({
        updating: false,
        updateSuccess: false,
        formError: response?.zodError,
      });
      toast.error('Failed to create packs. Please check the form for errors.');
    } else {
      set({ updating: false, updateSuccess: true });
      toast.success('Pack created successfully!');
    }
  } catch (error) {
    set({ updating: false, updateSuccess: false });
    console.error('Error creating packs:', error);
    toast.error('An error occurred while creating the pack. Please try again.');
  }
};
