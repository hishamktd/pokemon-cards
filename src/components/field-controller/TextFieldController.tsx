import { Controller } from 'react-hook-form';

import { AppTextField } from '@core/components/app-inputs';

import { RenderTextFieldProps } from '.';

const TextFieldController = <T extends Record<string, unknown>>(
  props: RenderTextFieldProps<T>,
) => {
  const { control, name, ...rest } = props;

  return (
    <Controller<T>
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <AppTextField
          error={!!error}
          helperText={error?.message}
          {...rest}
          {...field}
        />
      )}
    />
  );
};

export default TextFieldController;
