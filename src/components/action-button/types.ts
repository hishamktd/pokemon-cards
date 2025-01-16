import { IconButtonProps } from '@core/components/icon-button';

export type Actions = 'edit' | 'delete';

export type ActionButtonProps = {
  for: Actions;
};

export type ActionItems = Record<Actions, IconButtonProps>;
