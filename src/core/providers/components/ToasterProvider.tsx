import React, { memo } from 'react';

import { Toaster } from 'react-hot-toast';

import Icon from '@/lib/icons';
import { ICONS } from '@/lib/icons/icons-const';

const { SUCCESS_ANIMATED, CLOSE_ROUNDED_ANIMATED } = ICONS;

const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-left"
      reverseOrder={false}
      gutter={3}
      toastOptions={{
        className: '',
        duration: 3000,
        removeDelay: 1000,
        success: {
          icon: (
            <Icon
              icon={SUCCESS_ANIMATED}
              sx={{ color: (t) => `${t.palette.success.main} !important` }}
            />
          ),
        },
        error: {
          icon: (
            <Icon
              icon={CLOSE_ROUNDED_ANIMATED}
              sx={{ color: (t) => `${t.palette.error.main} !important` }}
            />
          ),
        },
      }}
    />
  );
};

export default memo(ToasterProvider);
