'use client';

import React from 'react';

import { ICONS } from '@/lib/icons/icons-const';
import {
  ActionTitle,
  PaginationSearchTitle,
  Title,
} from '@core/components/app-title';

const { ATTACKS_ICON } = ICONS;

const Titles = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flexWrap: 'wrap',
      }}
    >
      <Title title="Dashboard" variant="large" icon={ATTACKS_ICON} />
      <Title title="Dashboard" variant="medium" />
      <Title title="Dashboard" variant="small" />
      <Title title="Dashboard" weight="bold" />
      <Title title="Dashboard" weight="medium" />
      <Title title="Dashboard" weight="light" />
      <ActionTitle
        icon={ATTACKS_ICON}
        title="Dashboard"
        buttonGroupProps={{ outlinedButtonProps: { isHidden: false } }}
      />
      <PaginationSearchTitle
        icon={ATTACKS_ICON}
        title="Dashboard"
        buttonGroupProps={{ outlinedButtonProps: { isHidden: false } }}
        paginationProps={{ totalCount: 100 }}
      />
    </div>
  );
};

export default Titles;
