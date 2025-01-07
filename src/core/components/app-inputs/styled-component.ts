import { styled, TextField } from '@mui/material';

export const CustomTextField = styled(TextField)(
  ({ theme, error, disabled }) => ({
    ...(disabled
      ? {
          ['& .MuiInputLabel-root']: {
            color: theme.palette.text.disabled,
          },

          ['& .MuiOutlinedInput-root']: {
            paddingRight: 0,

            ['& .MuiInputBase-input']: {
              color: theme.palette.text.disabled,
            },

            ['& .MuiOutlinedInput-notchedOutline']: {
              borderColor: theme.palette.text.disabled,
            },
          },
        }
      : {}),
    ...(theme.palette.mode === 'dark' && !error && !disabled
      ? {
          ['&:not(:focus-within) .MuiInputLabel-root']: {
            color: theme.palette.common.black,
          },

          ['& .MuiOutlinedInput-root']: {
            ['& .MuiInputBase-input']: {
              color: theme.palette.common.black,
            },

            ['&:not(:focus-within) .MuiOutlinedInput-notchedOutline']: {
              borderColor: theme.palette.common.black,
            },
          },
        }
      : {}),

    ['& .MuiInputBase-input']: {
      ['&:-webkit-autofill']: {
        WebkitBoxShadow: '0 0 0 100px transparent inset',
        WebkitTextFillColor: theme.palette.common.black,
        transition: 'background-color 5000s ease-in-out 0s',
      },
    },
  }),
);

export const NumberInput = styled(CustomTextField)({
  ['& input[type=number]']: {
    mozAppearance: 'textfield',
    webkitAppearance: 'none',
    margin: 0,
  },
  ['& input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button']:
    {
      webkitAppearance: 'none',
      margin: 0,
    },
});
