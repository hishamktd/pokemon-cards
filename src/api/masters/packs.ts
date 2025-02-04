import { ZodError } from 'zod';
import { create } from 'zustand';

import {
  createPacksAction,
  deletePackAction,
  fetchPackAction,
  fetchPacksAction,
  updatePackAction,
} from '@/service/masters/packs';
import { BaseParams } from '@/types';
import { Packs, PacksForm, PacksUpdateForm } from '@/types/masters/packs';

export type PacksStore = {
  entities: Packs[];
  entity: Packs | null;
  loading: boolean;
  totalCount: number;
  error: string | null;
  updating: boolean;
  updateSuccess: boolean;
  formError: ZodError<PacksForm> | null;
  fetchPacks: (params: BaseParams) => Promise<void>;
  fetchPack: (id: number) => Promise<void>;
  createPacks: (data: PacksForm) => Promise<void>;
  updatePack: (data: PacksUpdateForm) => Promise<void>;
  deletePack: (id: number) => Promise<void>;
  cleanEntity: () => void;
};

const usePacksStore = create<PacksStore>((set) => ({
  entities: [],
  entity: null,
  loading: false,
  error: null,
  totalCount: 0,
  updating: false,
  updateSuccess: false,
  formError: null,

  fetchPacks: async (params) => fetchPacksAction(set, params),

  fetchPack: async (id) => fetchPackAction(set, id),

  createPacks: async (data) => createPacksAction(set, data),

  updatePack: async (data) => updatePackAction(set, data),

  deletePack: async (id) => deletePackAction(set, id),

  cleanEntity: () => set({ entity: null }),
}));

export default usePacksStore;
