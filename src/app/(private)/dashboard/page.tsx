'use client';

import { useLogoutMutation } from '@/api/auth/auth.api';
import AppButton from '@core/components/app-button/Button';

export default function DashboardPage() {
  const [logout] = useLogoutMutation();

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
