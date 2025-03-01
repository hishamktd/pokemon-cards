export type Types = {
  id: number;
  name: string;
  iconUrl: string;
  color: string;
};

export type TypesForm = Omit<Types, 'id' | 'iconUrl'> & {
  icon: File | null;
};

export type TypesCreateRequest = Omit<Types, 'id'>;
