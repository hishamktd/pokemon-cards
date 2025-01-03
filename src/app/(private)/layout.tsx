import PageWrapper from '@core/layout/page-wrapper';
import Sidebar from '@core/layout/side-bar';
import PrivateProvider from '@core/providers/PrivateProvider';
import { redirect } from 'next/navigation';

import navigation from '@/constants/navigation';
import { getSession } from '@/lib/auth';

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
      <Sidebar navItems={navigation}>
        <PageWrapper>{children}</PageWrapper>
      </Sidebar>
    </PrivateProvider>
  );
}
