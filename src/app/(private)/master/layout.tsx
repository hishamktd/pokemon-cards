import navigation from '@/constants/navigation';
import AppTab from '@core/components/app-tab/Tab';

const { master } = navigation;

const tabs = master.children;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppTab tabs={tabs}>{children}</AppTab>;
}
