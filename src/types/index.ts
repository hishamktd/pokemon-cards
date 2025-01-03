// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type Nullable<T> = T | null;

export type Maybe<T> = T | undefined;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type NumStr = number | string;
