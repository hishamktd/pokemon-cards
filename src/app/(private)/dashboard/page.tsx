'use client';

import { logout } from '@/lib/logout';
import AppButton from '@core/components/app-button/Button';

export default function DashboardPage() {
  const onClick = () => {
    logout();
  };

  return (
    <main>
      <AppButton variant="contained" onClick={onClick}>
        Logout
      </AppButton>
    </main>
  );
}
