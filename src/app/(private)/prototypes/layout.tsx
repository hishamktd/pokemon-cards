import navigation from '@/constants/navigation';
import AppTab from '@core/components/app-tab/Tab';

const { prototypes } = navigation;

const tabs = prototypes.children;

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppTab tabs={tabs}>{children}</AppTab>;
}
