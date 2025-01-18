import toast from 'react-hot-toast';

import { createTypes, deleteTypes, getType, getTypes, updateType } from '@/actions/master/types';
import { TypesStore } from '@/store/masters/types';
import { BaseParams, SetFunc } from '@/types';
import { Types, TypesForm } from '@/types/masters/types';
import { PAGE_SIZE } from '@/utils/pagination';

export const fetchTypesAction = async (
  set: SetFunc<TypesStore>,
  { page, size = PAGE_SIZE, query = '' }: BaseParams,
) => {
  set({ loading: true, error: null });
  try {
    const { data, totalCount } = await getTypes({ page, size, query });

    set({ entities: data, loading: false, totalCount });
  } catch (error) {
    console.error('Error fetching entities:', error);

    set({ error: (error as Error).message, loading: false });
    toast.error('Failed to fetch types. Please try again.');
  }
};

export const fetchTypeAction = async (set: SetFunc<TypesStore>, id: number) => {
  set({ loading: true, error: null });
  try {
    const type = await getType(id);
    set({ entity: type?.data, loading: false });
  } catch (error) {
    console.error('Error fetching type:', error);
    set({ error: (error as Error).message, loading: false });
    toast.error('Failed to fetch type. Please try again.');
  }
};

export const createTypeAction = async (
  set: SetFunc<TypesStore>,
  data: TypesForm,
) => {
  try {
    set({ updating: true, updateSuccess: false, formError: null });
    const response = await createTypes(data);

    if (!response.success) {
      set({
        updating: false,
        updateSuccess: false,
        formError: response?.zodError,
      });
      toast.error('Failed to create type. Please check the form for errors.');
    } else {
      set({ updating: false, updateSuccess: true });
      toast.success('Type created successfully!');
    }
  } catch (error) {
    set({ updating: false, updateSuccess: false });
    console.error('Error creating type:', error);
    toast.error('An error occurred while creating the type. Please try again.');
  }
};

export const updateTypeAction = async (
  set: SetFunc<TypesStore>,
  data: Types,
) => {
  try {
    set({ updating: true, updateSuccess: false, formError: null });
    await updateType(data);
    set({ updating: false, updateSuccess: true });
    toast.success('Type updated successfully!');
  } catch (error) {
    set({ updating: false, updateSuccess: false });
    console.error('Error updating type:', error);
    toast.error('An error occurred while updating the type. Please try again.');
  }
};

export const deleteTypeAction = async (
  set: SetFunc<TypesStore>,
  id: number,
) => {
  try {
    set({ updating: true, updateSuccess: false, formError: null });
    await deleteTypes(id);
    set({ updating: false, updateSuccess: true });
    toast.success('Pack deleted successfully!');
  } catch (error) {
    set({ updating: false, updateSuccess: false });
    console.error('Error deleting type:', error);
    toast.error('An error occurred while deleting the type. Please try again.');
  }
};
