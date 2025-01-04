'use client';

import { logoutAction } from '@/actions/auth';
import AppButton from '@core/components/app-button/Button';

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
