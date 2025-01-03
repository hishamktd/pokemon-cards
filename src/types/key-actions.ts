import { KeyActionEnum } from '@/enum/key-actions';

export type KeyActions = {
  modifier: 'Ctrl' | 'Alt' | 'Shift';
  key: string;
  action: KeyActionEnum;
};
