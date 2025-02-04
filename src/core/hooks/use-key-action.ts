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
      if (!keyAction || disabled) {
        return;
      }

      const key = event.key.toLowerCase();

      if (keyAction && keyAction.key.toLowerCase() === key) {
        event.preventDefault();
        action?.(event as Any);
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
