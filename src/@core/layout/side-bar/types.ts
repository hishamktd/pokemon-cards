export type NavItem = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

export type SidebarProps = {
  navItems: NavItem[];
  children: React.ReactNode;
};
