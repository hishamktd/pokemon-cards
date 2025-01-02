'use client';

import { logoutAction } from '@/actions/auth';
import AddDataForm from '@/components/AddFormData';

export default function DashboardPage() {
  const onClick = async () => {
    await logoutAction();
  };

  return (
    <main>
      <h1>Dashboard</h1>
      <AddDataForm />
      <div>
        <h1>Dashboard</h1>
        <AddDataForm />
        <div>
          <h2>Your Posts</h2>
        </div>{' '}
        <h1>Dashboard</h1>
        <AddDataForm />
        <div>
          <h2>Your Posts</h2>
        </div>{' '}
        <h1>Dashboard</h1>
        <AddDataForm />
        <div>
          <h2>Your Posts</h2>
        </div>{' '}
        <h1>Dashboard</h1>
        <AddDataForm />
        <div>
          <h2>Your Posts</h2>
        </div>{' '}
        <h1>Dashboard</h1>
        <AddDataForm />
        <div>
          <h2>Your Posts</h2>
        </div>{' '}
        <h1>Dashboard</h1>
        <AddDataForm />
        <div>
          <h2>Your Posts</h2>
        </div>{' '}
        <h2>Your Posts</h2>
      </div>
      <h1>Dashboard</h1>
      <AddDataForm />
      <div>
        <h2>Your Posts</h2>
      </div>
      <h1>Dashboard</h1>
      <AddDataForm />
      <div>
        <h2>Your Posts</h2>
      </div>
      <h1>Dashboard</h1>
      <AddDataForm />
      <div>
        <h2>Your Posts</h2>
      </div>

      <button onClick={onClick}>Logout</button>
    </main>
  );
}
