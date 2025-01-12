export type SearchProps = {
  value?: string;
  onChange?: (newQuery: string) => void;
};

export type SearchIconProps = {
  hasValue: boolean;
  onClear: () => void;
};
