import React from 'react';

import { ActionTitle, Title } from '@core/components/app-title';

const Titles = () => {
  return (
    <div>
      <Title title="Dashboard" variant="large" />
      <Title title="Dashboard" variant="medium" />
      <Title title="Dashboard" variant="small" />
      <Title title="Dashboard" weight="bold" />
      <Title title="Dashboard" weight="medium" />
      <Title title="Dashboard" weight="light" />
      <ActionTitle
        title="Dashboard"
        buttonGroupProps={{ outlinedButtonProps: { isHidden: false } }}
      />
    </div>
  );
};

export default Titles;
