import navigation from '@/constants/common/navigation';
import AppTab from '@core/components/app-tab/Tab';

const { master } = navigation;

const tabs = master.children;

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppTab tabs={tabs}>{children}</AppTab>;
}
