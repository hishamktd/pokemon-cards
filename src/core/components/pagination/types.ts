import { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';

export type PaginationProps = Omit<MuiPaginationProps, 'count'> & {
  totalCount?: number;
};
