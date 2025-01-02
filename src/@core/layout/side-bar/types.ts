export type NavItem = {
  path: string;
  label: string;
  icon: string;
};

export type SidebarProps = {
  navItems: NavItem[];
  children: React.ReactNode;
};
