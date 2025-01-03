import { KeyActionEnum } from '@/enum/key-actions';
import { KeyActions } from '@/types/key-actions';

const { CREATE, SAVE, EDIT, UPDATE } = KeyActionEnum;

export const keyActions: KeyActions[] = [
  { modifier: 'Ctrl', key: 'I', action: SAVE },
  { modifier: 'Ctrl', key: 'C', action: CREATE },
  { modifier: 'Ctrl', key: 'R', action: EDIT },
  { modifier: 'Ctrl', key: 'U', action: UPDATE },
];
