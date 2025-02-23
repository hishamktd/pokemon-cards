'use client';

import React from 'react';

import { NumStr } from '@/types';
import {
  AppMultiSelectField,
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
  const [value, setValue] = React.useState<(typeof baseOptions)[0] | ''>('');
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
          onChange={(value) => setValue(value)}
        />
        <AppSelectField options={baseOptions} label="Age" color="secondary" />
        <AppSelectField
          options={baseOptions}
          label="Age"
          color="warning"
          value={value}
          onChange={(value) => setValue(value)}
          getOptionsLabel={(option) => option?.label ?? ''}
        />
        <AppSelectField
          options={baseOptions}
          label="Age"
          color="info"
          value={value}
          onChange={(value) => setValue(value)}
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
        <AppMultiSelectField
          label="high"
          options={baseOptions}
          values={values}
          onChange={(value) => setValues(value)}
        />
        <AppMultiSelectField
          label="high"
          options={baseOptions}
          values={values}
          onChange={(value) => setValues(value)}
          color="success"
        />
        <AppMultiSelectField
          label="high"
          options={baseOptions}
          values={values}
          onChange={(value) => setValues(value)}
          error
          helperText="ot bad at all"
        />
        <AppMultiSelectField
          label="high"
          options={baseOptions}
          values={values}
          onChange={(value) => setValues(value)}
        />
        <AppMultiSelectField
          label="high"
          options={baseOptions}
          values={values}
          onChange={(value) => setValues(value)}
        />
        <AppMultiSelectField
          label="high"
          options={baseOptions}
          values={values}
          onChange={(value) => setValues(value)}
          getOptionsLabel={(option) => option?.label ?? ''}
        />
      </div>
    </>
  );
};

export default Inputs;
