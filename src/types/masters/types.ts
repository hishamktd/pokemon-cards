import { Nullable } from '..';

export type Types = {
  id: number;
  name: string;
  iconUrl: string;
  color: string;
};

export type TypesForm = Omit<Types, 'id'> & {
  icon: Nullable<File>;
};

export type TypesCreateRequest = Omit<Types, 'id'>;
