import { Theme as MuiTheme } from '@mui/material/styles';

import { GroupBase, StylesConfig, Theme } from 'react-select';

import { BaseOption } from '@/types';

type ColorOption = BaseOption & { color?: string };

export const getBaseStyles = <T extends BaseOption>(
  theme: MuiTheme,
  isMulti?: boolean,
  error?: boolean,
): StylesConfig<T, boolean, GroupBase<T>> => {
  return {
    option: (base) => ({ ...base, fontSize: 14 }),
    placeholder: (base) => ({ ...base, color: theme.palette.text.disabled }),
    menu: (base) => ({ ...base, zIndex: 9999 }),
    multiValue: (base, { data }) => {
      const colorOption = data as ColorOption;
      return {
        ...base,
        backgroundColor: colorOption.color || theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.common.white,
        paddingLeft: '4px',
      };
    },
    control: (base, state) => ({
      ...base,
      ...(error && {
        borderColor: theme.palette.error.main,
      }),
      ...(state.isDisabled && {
        backgroundColor: 'hsl(0, 0%, 98%)',
      }),
    }),

    multiValueLabel: (base) => ({
      ...base,
      color: theme.palette.common.white,
      padding: '3px 6px',
    }),
    multiValueRemove: (base) => ({
      ...base,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: theme.palette.error.main,
      },
    }),
    menuPortal: (base) => ({ ...base, zIndex: 3 }),
  };
};

export function getBaseTheme(currentTheme: Theme, theme: MuiTheme): Theme {
  return {
    ...currentTheme,
    borderRadius: theme.shape.borderRadius,
    spacing: { ...currentTheme.spacing, controlHeight: 40 },
    colors: {
      ...currentTheme.colors,
      primary: theme.palette.primary.main,
      primary25: theme.palette.action.hover,
      danger: theme.palette.error.main,
    },
  };
}
