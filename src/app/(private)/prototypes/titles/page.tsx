'use client';

import React from 'react';

import { ICONS } from '@/lib/icon/icons-const';
import {
  ActionTitle,
  PaginationSearchTitle,
  Title,
} from '@core/components/app-title';

const { ATTACK } = ICONS;

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
      <PaginationSearchTitle
        icon={ATTACK}
        title="Dashboard"
        buttonGroupProps={{ outlinedButtonProps: { isHidden: false } }}
        paginationProps={{ totalCount: 100 }}
      />
    </div>
  );
};

export default Titles;
