export type Types = {
  id: number;
  name: string;
};

export type TypesForm = Omit<Types, 'id'>;
