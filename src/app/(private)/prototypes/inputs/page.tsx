import React from 'react';

import { AppTextField } from '@core/components/app-text-field';

const Inputs = () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AppTextField />
      <AppTextField />
      <AppTextField />
    </div>
  );
};

export default Inputs;
