import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/@core/layout/side-bar";
import navigation from "@/constants/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Sidebar navItems={navigation}>{children}</Sidebar>
    </>
  );
}
