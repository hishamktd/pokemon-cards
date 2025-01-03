'use client';

import { useState } from 'react';

import { logoutAction } from '@/actions/auth';
import { KeyActionEnum } from '@/enum/key-actions';
import AppButton from '@core/components/app-button/Button';

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    await logoutAction();
  };

  return (
    <main>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <AppButton variant="contained" disabled onClick={onClick}>
          Log out
        </AppButton>
        <AppButton variant="outlined" disabled>
          Log out
        </AppButton>
        <AppButton variant="text" disabled>
          Log out
        </AppButton>
        <AppButton
          variant="contained"
          onClick={() => setLoading((prev) => !prev)}
          loading={loading}
          keyFor={KeyActionEnum.CREATE}
        >
          Log outs
        </AppButton>
        <AppButton variant="outlined">Log out</AppButton>
        <AppButton variant="text">Log out</AppButton>
        <AppButton variant="contained" color="secondary">
          Log out
        </AppButton>
        <AppButton variant="outlined" color="secondary">
          Log out
        </AppButton>
        <AppButton variant="text" color="secondary">
          Log out
        </AppButton>
        <AppButton
          variant="contained"
          color="error"
          onClick={() => setLoading((prev) => !prev)}
          loading
        >
          Log out
        </AppButton>
        <AppButton variant="outlined" color="error">
          Log out
        </AppButton>
        <AppButton variant="text" color="error">
          Log out
        </AppButton>
        <AppButton variant="contained" color="info">
          Log out
        </AppButton>
        <AppButton variant="outlined" color="info">
          Log out
        </AppButton>
        <AppButton variant="text" color="info">
          Log out
        </AppButton>
        <AppButton variant="contained" color="success">
          Log out
        </AppButton>
        <AppButton variant="outlined" color="success">
          Log out
        </AppButton>
        <AppButton variant="text" color="success">
          Log out
        </AppButton>
        <AppButton variant="contained" color="warning">
          Log out
        </AppButton>
        <AppButton variant="outlined" color="warning">
          Log out
        </AppButton>
        <AppButton variant="text" color="warning">
          Log out
        </AppButton>
        <AppButton variant="contained" color="inherit">
          Log out
        </AppButton>
        <AppButton variant="outlined" color="inherit">
          Log out
        </AppButton>
        <AppButton variant="text" color="inherit">
          Log out
        </AppButton>
        {/* // ** This is a loading button */}
        <AppButton
          variant="contained"
          disabled
          onClick={() => setLoading((prev) => !prev)}
          loading={loading}
        >
          Log out
        </AppButton>
        <AppButton
          variant="outlined"
          disabled
          onClick={() => setLoading((prev) => !prev)}
          loading={loading}
        >
          Log out
        </AppButton>
        <AppButton
          variant="text"
          disabled
          onClick={() => setLoading((prev) => !prev)}
          loading
        >
          Log out
        </AppButton>
        <AppButton
          variant="contained"
          onClick={() => setLoading((prev) => !prev)}
          loading
        >
          Log out
        </AppButton>
        <AppButton variant="outlined" loading>
          Log out
        </AppButton>
        <AppButton variant="text" loading>
          Log out
        </AppButton>
        <AppButton variant="contained" color="secondary" loading>
          Log out
        </AppButton>
        <AppButton variant="outlined" color="secondary" loading>
          Log out
        </AppButton>
        <AppButton variant="text" color="secondary" loading>
          Log out
        </AppButton>
        <AppButton variant="contained" color="error" loading>
          Log out
        </AppButton>
        <AppButton variant="outlined" color="error" loading>
          Log out
        </AppButton>
        <AppButton variant="text" color="error" loading>
          Log out
        </AppButton>
        <AppButton variant="contained" color="info" loading>
          Log out
        </AppButton>
        <AppButton variant="outlined" color="info" loading>
          Log out
        </AppButton>
        <AppButton variant="text" color="info" loading>
          Log out
        </AppButton>
        <AppButton variant="contained" color="success" loading>
          Log out
        </AppButton>
        <AppButton variant="outlined" color="success" loading>
          Log out
        </AppButton>
        <AppButton variant="text" color="success" loading>
          Log out
        </AppButton>
        <AppButton variant="contained" color="warning" loading>
          Log out
        </AppButton>
        <AppButton variant="outlined" color="warning" loading>
          Log out
        </AppButton>
        <AppButton variant="text" color="warning" loading>
          Log out
        </AppButton>
        <AppButton variant="contained" color="inherit" size="large" loading>
          Log out
        </AppButton>
        <AppButton variant="outlined" color="inherit" loading>
          Log out
        </AppButton>
        <AppButton variant="text" color="inherit" size="large" loading>
          Log out
        </AppButton>
      </div>
    </main>
  );
}
