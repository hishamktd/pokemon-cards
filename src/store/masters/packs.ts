import { ZodError } from 'zod';
import { create } from 'zustand';

import { createPacksAction, fetchPacksAction } from '@/service/masters/packs';
import { BaseParams } from '@/types';
import { Packs, PacksForm } from '@/types/masters/packs';

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

  fetchPacks: async (params) => fetchPacksAction(set, params),

  createPacks: async (data) => createPacksAction(set, data),
}));

export default usePacksStore;
