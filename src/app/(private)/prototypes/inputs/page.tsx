import React from 'react';

import { AppTextField } from '@core/components/app-inputs';

const Inputs = () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <AppTextField label="Label" />
      <AppTextField label="Label" disabled value={'34567'} />
      <AppTextField label="Label" type="password" />
      <AppTextField label="Label" type="number" />
      <AppTextField rows={2} label="Label" multiline />
      <AppTextField rows={2} label="Label" multiline color="secondary" />
      <AppTextField
        rows={2}
        label="Label"
        multiline
        color="error"
        helperText="234"
        error
      />
      <AppTextField label="Label" color="error" helperText="234" error />
    </div>
  );
};

export default Inputs;
