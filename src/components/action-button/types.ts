import { NumStr } from '@/types';
import { IconButtonProps } from '@core/components/icon-button';

export type Actions = 'edit' | 'delete';

export type ActionButtonProps = {
  for: Actions;
  onClick?: (id: number) => void;
  id?: NumStr;
};

export type ActionItems = Record<Actions, IconButtonProps>;
