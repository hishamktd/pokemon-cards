import { redirect } from 'next/navigation';

import navItems from '@/config/nav-items';
import { LOCAL_STORAGE_KEYS } from '@/constants/common/store-keys';
import { serverCookies } from '@/lib/server-cookies';
import { validateSession } from '@/service/auth';
import PageWrapper from '@core/layout/page-wrapper';
import Sidebar from '@core/layout/side-bar';
import PrivateProvider from '@core/providers/PrivateProvider';

const { TOKEN } = LOCAL_STORAGE_KEYS;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await serverCookies.get(TOKEN);

  if (!token) {
    redirect('/login');
  }

  const session = await validateSession(token);

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
