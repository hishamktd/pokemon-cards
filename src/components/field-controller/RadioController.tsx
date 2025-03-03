import React from 'react';

import { Controller } from 'react-hook-form';

import gMemo from '@/utils/memo';
import { AppRadio } from '@core/components/app-inputs';

import { RadioControllerProps } from '.';

const RadioController = <
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  props: RadioControllerProps<T>,
) => {
  const { control, name, ...rest } = props;

  return (
    <Controller<T>
      control={control}
      name={name}
      render={({ field: { value, ...field } }) => (
        <AppRadio {...rest} {...field} value={value as unknown as string} />
      )}
    />
  );
};

export default gMemo(RadioController);
