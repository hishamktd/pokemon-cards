'use client';

import AppButton from '@core/components/app-button/Button';

import { logoutAction } from '@/actions/auth';

export default function DashboardPage() {
  const onClick = async () => {
    await logoutAction();
  };

  return (
    <main>
      <AppButton variant="contained" onClick={onClick}>
        Logout
      </AppButton>
    </main>
  );
}
