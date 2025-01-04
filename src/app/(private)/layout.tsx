import { redirect } from 'next/navigation';

import navItems from '@/config/nav-items';
import { getSession } from '@/lib/auth';
import PageWrapper from '@core/layout/page-wrapper';
import Sidebar from '@core/layout/side-bar';
import PrivateProvider from '@core/providers/PrivateProvider';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect('/');
  }

  return (
    <PrivateProvider>
      <Sidebar navItems={navItems}>
        <PageWrapper>{children}</PageWrapper>
      </Sidebar>
    </PrivateProvider>
  );
}
