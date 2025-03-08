import { Collapse } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { memo } from 'react';

import { AppFormRowProps } from '.';

function FormHelperRow({
  fields,
  spacing = 2,
  alignItems,
  justifyContent,
  hidden = false,
  collapseDir = 'horizontal',
}: AppFormRowProps) {
  const columnWidth = Math.floor(12 / fields?.length);

  return (
    <Grid2
      container
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Collapse in={!hidden} orientation={collapseDir}>
        {fields.map(
          ({ hidden = false, collapseDir = 'horizontal', ...field }, index) => {
            return (
              <Grid2
                key={index}
                size={
                  field.size
                    ? typeof field?.size === 'object'
                      ? { ...field.size }
                      : field.size
                    : columnWidth || 6
                }
              >
                <Collapse key={index} in={!hidden} orientation={collapseDir}>
                  {field.component}
                </Collapse>
              </Grid2>
            );
          },
        )}
      </Collapse>
    </Grid2>
  );
}

export default memo(FormHelperRow);
