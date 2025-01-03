import React from 'react';

import { AppTextField } from '@core/components/app-text-field';

const Inputs = () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AppTextField label="Label" />
      <AppTextField label="Label" disabled />
      <AppTextField label="Label" type="password" />
      <AppTextField label="Label" type="number" />
    </div>
  );
};

export default Inputs;
