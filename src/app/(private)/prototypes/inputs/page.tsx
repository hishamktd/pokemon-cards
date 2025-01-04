'use client';

import React from 'react';

import { AppNumberField, AppTextField } from '@core/components/app-inputs';
import { Title } from '@core/components/app-title';

const Inputs = () => {
  const [number, setNumber] = React.useState<null | number>(null);
  return (
    <>
      <Title title="textfield" />
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
      <Title title="number field" />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <AppNumberField label="Label" />
        <AppNumberField label="Label" disabled />
        <AppNumberField label="Label" color="secondary" />
        <AppNumberField
          label="Label"
          color="error"
          value={number}
          onChange={(value) => setNumber(value)}
          onIncrement={() => setNumber((prev) => (prev || 0) + 1)}
          onDecrement={() => setNumber((prev) => (prev || 0) - 1)}
        />
        <AppNumberField label="Label" error helperText="234" />
      </div>
    </>
  );
};

export default Inputs;
