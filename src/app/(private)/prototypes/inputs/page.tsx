'use client';

import React from 'react';

import { BaseOption, NumStr } from '@/types';
import {
  AppNumberField,
  AppSelectField,
  AppTextField,
} from '@core/components/app-inputs';
import { Title } from '@core/components/app-title';

const baseOptions = [
  { id: 1, name: 'Option 1', label: '4rth 1' },
  { id: 2, name: 'Option 2', label: '4rth 2' },
  { id: 3, name: 'Option 3', label: '4rth 3' },
  { id: 4, name: 'Option 4', label: '4rth 4' },
];

const Inputs = () => {
  const [number, setNumber] = React.useState<NumStr>('');
  const [value, setValue] = React.useState<BaseOption>(null);
  const [values, setValues] = React.useState<typeof baseOptions>([]);

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
          onIncrement={() => setNumber((prev) => (Number(prev) || 0) + 1)}
          onDecrement={() => setNumber((prev) => (Number(prev) || 0) - 1)}
        />
        <AppNumberField label="Label" error helperText="234" />
      </div>
      <Title title="Select field" sx={{ mt: 4 }} />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <AppSelectField
          options={baseOptions}
          label="Age"
          value={value}
          isMulti={false}
          onChange={(value) => setValue(value)}
          color="primary"
          isDisabled
          isRequired
        />
        <AppSelectField options={baseOptions} label="Age" color="secondary" />
        <AppSelectField
          options={baseOptions}
          label="Age"
          color="warning"
          value={value}
          isMulti={false}
          onChange={(value) => setValue(value)}
          getOptionLabel={(option) => String(option?.id)}
        />
        <AppSelectField
          options={baseOptions}
          label="Age"
          color="info"
          value={value}
          onChange={(value) => setValue(value)}
          isMulti={false}
          isClearable={false}
        />
        <AppSelectField
          options={baseOptions}
          label="Age"
          error
          helperText="sdfg"
        />
      </div>
      <Title title="Multi Select field" sx={{ mt: 4 }} />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <AppSelectField
          label="high"
          options={baseOptions}
          isMulti
          value={values}
          onChange={(value) => setValues(value)}
        />
        <AppSelectField
          label="high"
          options={baseOptions}
          value={values}
          isMulti
          onChange={(value) => setValues(value)}
          color="success"
        />
        <AppSelectField
          label="high"
          options={baseOptions}
          value={values}
          isMulti
          onChange={(value) => setValues(value)}
          error
          helperText="ot bad at all"
        />
        <AppSelectField
          label="high"
          options={baseOptions}
          value={values}
          isMulti
          onChange={(value) => setValues(value)}
        />
        <AppSelectField
          label="high"
          options={baseOptions}
          value={values}
          isMulti
          onChange={(value) => setValues(value)}
        />
        <AppSelectField
          label="high"
          options={baseOptions}
          value={values}
          isMulti
          onChange={(value) => setValues(value)}
          getOptionLabel={(option) => option?.label ?? ''}
          isDisabled
        />
      </div>
    </>
  );
};

export default Inputs;
