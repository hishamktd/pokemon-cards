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

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const Inputs = () => {
  const [number, setNumber] = React.useState<NumStr>('');
  const [value, setValue] = React.useState<string>('');
  const [values, setValues] = React.useState<string[]>([]);

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
          options={options}
          label="Age"
          value={value}
          onChange={(value) => setValue(value.toString())}
        />
        <AppSelectField options={options} label="Age" color="secondary" />
        <AppSelectField
          options={options}
          label="Age"
          color="warning"
          value={value}
          onChange={(value) => setValue(value.toString())}
        />
        <AppSelectField
          options={options}
          label="Age"
          color="info"
          value={value}
          onChange={(value) => setValue(value.toString())}
          isClearable={false}
        />
        <AppSelectField options={options} label="Age" error helperText="sdfg" />
      </div>
      <Title title="Multi Select field" sx={{ mt: 4 }} />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <AppMultiSelectField
          label="high"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
        />
        <AppMultiSelectField
          label="high"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
          color="success"
        />
        <AppMultiSelectField
          label="high"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
          error
          helperText="ot bad at all"
        />
        <AppMultiSelectField
          label="high"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
        />
        <AppMultiSelectField
          label="high"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
        />
        <AppMultiSelectField
          label="high"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
        />
      </div>
    </>
  );
};

export default Inputs;
