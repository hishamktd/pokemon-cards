export type InitialState<T extends object> = {
  entities: T[];
  entity: T | null;
  loading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  updateSuccess: boolean;
  updating: boolean;
  deleting: boolean;
  deleted: boolean;
};

export const initialState: InitialState<object> = {
  entities: [],
  entity: null,
  loading: false,
  errorMessage: null,
  successMessage: null,
  updateSuccess: false,
  updating: false,
  deleting: false,
  deleted: false,
};

export const getInitialState = <T extends object>(
  entity: T | null = null,
): InitialState<T> => {
  return {
    ...initialState,
    entities: [] as T[],
    entity,
  };
};
