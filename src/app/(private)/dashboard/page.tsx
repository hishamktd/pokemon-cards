'use client';

import { logoutAction } from '@/actions/auth';

export default function DashboardPage() {
  const onClick = async () => {
    await logoutAction();
  };

  return (
    <main>
      Dashboard
      <button onClick={onClick}>Logout</button>
    </main>
  );
}
