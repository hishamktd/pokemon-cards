import PublicProvider from "@core/providers/PublicProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicProvider>{children}</PublicProvider>;
}
