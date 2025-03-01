'use client';

import { MouseEventHandler, useCallback, useEffect } from 'react';

import { keyActions } from '@/constants/common/key-actions';
import { KeyActionEnum } from '@/enum/key-actions';
import { Any } from '@/types';

function useKeyActions(
  keyFor?: KeyActionEnum | null,
  action?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
): void {
  const keyAction = keyFor
    ? keyActions.find((item) => item.action === keyFor)
    : undefined;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { ctrlKey, altKey, shiftKey, key: eventKey } = event;
      if (!keyAction || disabled) {
        return;
      }

      const key = eventKey.toLowerCase();
      const { key: actionKey, modifier } = keyAction;

      if (actionKey.toLowerCase() === key) {
        const isModifierMatch =
          (modifier === 'Ctrl' && ctrlKey) ||
          (modifier === 'Alt' && altKey) ||
          (modifier === 'Shift' && shiftKey) ||
          (!modifier && !ctrlKey && !altKey && !shiftKey);

        if (isModifierMatch) {
          event.preventDefault();
          action?.(event as Any);
        }
      }
    },
    [keyAction, disabled, action],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

export default useKeyActions;
