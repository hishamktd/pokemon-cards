import { Collapse } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import { memo } from 'react';

import { AppFormRowProps } from '.';

function FormHelperRow({
  fields,
  spacing = 6,
  alignItems,
  justifyContent,
  hidden = false,
  collapseDir = 'horizontal',
}: AppFormRowProps) {
  const columnWidth = Math.floor(12 / fields?.length);

  return (
    <Collapse hidden={hidden} orientation={collapseDir}>
      <Grid2
        container
        spacing={spacing}
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        {fields.map(
          ({ hidden = false, collapseDir = 'horizontal', ...field }, index) => {
            return (
              <Collapse key={index} in={hidden} orientation={collapseDir}>
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
                  {field.component}
                </Grid2>
              </Collapse>
            );
          },
        )}
      </Grid2>
    </Collapse>
  );
}

export default memo(FormHelperRow);
