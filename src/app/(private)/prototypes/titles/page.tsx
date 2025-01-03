import React from 'react';

import { ActionTitle, Title } from '@core/components/app-title';

import { ICONS } from '@/constants/icons';

const { ATTACK } = ICONS;

const Titles = () => {
  return (
    <div>
      <Title title="Dashboard" variant="large" icon={ATTACK} />
      <Title title="Dashboard" variant="medium" />
      <Title title="Dashboard" variant="small" />
      <Title title="Dashboard" weight="bold" />
      <Title title="Dashboard" weight="medium" />
      <Title title="Dashboard" weight="light" />
      <ActionTitle
        icon={ATTACK}
        title="Dashboard"
        buttonGroupProps={{ outlinedButtonProps: { isHidden: false } }}
      />
    </div>
  );
};

export default Titles;
