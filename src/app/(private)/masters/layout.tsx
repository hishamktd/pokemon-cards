import masterNavItems from '@/config/master-nav-items';
import AppTab from '@core/components/app-tab/Tab';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppTab tabs={masterNavItems}>{children}</AppTab>;
}
