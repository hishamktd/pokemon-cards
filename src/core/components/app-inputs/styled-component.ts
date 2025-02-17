import { Box, styled, TextField } from '@mui/material';

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
  '& input[type=number]': {
    mozAppearance: 'textfield',
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
    {
      WebkitAppearance: 'none',
      margin: 0,
    },
});

export const DropZoneInputContainer = styled(Box)({
  border: '2px dashed #ccc',
  padding: '20px',
  cursor: 'pointer',
});

export const CropperContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '300px',
});

export const ImagePreviewContainer = styled(Box)({
  marginTop: '20px',
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  maxWidth: '100%',
  overflow: 'hidden',

  ['& .cropped-image']: {
    objectFit: 'cover',
    filter: 'blur(0)',
    transition: 'filter 0.3s',
    width: '100%',
    height: '100%',

    ['&:hover']: {
      filter: 'blur(2px)',
    },
  },

  ['& .clear-button']: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'none',
    pointerEvents: 'none',
  },

  ['&:hover .clear-button']: {
    display: 'block',
    pointerEvents: 'auto',
  },
});
