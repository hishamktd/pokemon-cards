import React from 'react';

import { ButtonGroup } from '@core/components/app-button';

const ButtonGroups = () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ButtonGroup
        outlinedButtonProps={{ isHidden: false }}
        cancelButton={{
          label: 'Undo',
          variant: 'outlined',
          loading: true,
          color: 'error',
        }}
      />
      <ButtonGroup
        cancelButton={{
          label: 'Undo',
          variant: 'outlined',
          loading: true,
          color: 'info',
        }}
        outlinedButtonProps={{ isHidden: false }}
        secondaryButton={{
          label: 'Secondary',
          variant: 'outlined',
          color: 'secondary',
        }}
        errorButton={{
          label: 'Error',
          variant: 'outlined',
          color: 'error',
        }}
      />
    </div>
  );
};

export default ButtonGroups;
