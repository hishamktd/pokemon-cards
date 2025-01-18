import { ZodError } from 'zod';
import { create } from 'zustand';

import {
  createTypeAction,
  deleteTypeAction,
  fetchTypeAction,
  fetchTypesAction,
  updateTypeAction,
} from '@/service/masters/types';
import { BaseParams } from '@/types';
import { Types, TypesForm } from '@/types/masters/types';

export type TypesStore = {
  entities: Types[];
  entity: Types | null;
  loading: boolean;
  totalCount: number;
  error: string | null;
  updating: boolean;
  updateSuccess: boolean;
  formError: ZodError<TypesForm> | null;
  fetchTypes: (params: BaseParams) => Promise<void>;
  fetchType: (id: number) => Promise<void>;
  createTypes: (data: TypesForm) => Promise<void>;
  updateType: (data: Types) => Promise<void>;
  deleteType: (id: number) => Promise<void>;
  cleanEntity: () => void;
};

const usePacksStore = create<TypesStore>((set) => ({
  entities: [],
  entity: null,
  loading: false,
  error: null,
  totalCount: 0,
  updating: false,
  updateSuccess: false,
  formError: null,

  fetchTypes: async (params) => fetchTypesAction(set, params),

  fetchType: async (id) => fetchTypeAction(set, id),

  createTypes: async (data) => createTypeAction(set, data),

  updateType: async (data) => updateTypeAction(set, data),

  deleteType: async (id) => deleteTypeAction(set, id),

  cleanEntity: () => set({ entity: null }),
}));

export default usePacksStore;
