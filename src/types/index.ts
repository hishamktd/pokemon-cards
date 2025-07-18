// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type Nullable<T> = T | null;

export type Maybe<T> = T | undefined;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type NumStr = number | string;

export type BaseOption = { id?: string | number; name?: string } | null;

export type BaseParams = {
  page: number;
  size?: number;
  query?: string;
  sortBy?: string;
  order?: string;
};

export type ServerBaseParams = {
  page: number;
  size: number;
  query: string;
};

export type DeleteItem = {
  id: number;
  name?: string;
} | null;

type Meta = {
  page: number;
  itemCount: number;
  pageCount: number | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type PaginationResponse<T> = {
  data: T[];
  meta: Meta;
};

export type TId = Nullable<number>;

export type GetAllType = {
  id: number;
  name: string;
};
