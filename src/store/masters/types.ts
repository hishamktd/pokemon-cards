import { ZodError } from 'zod';

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
