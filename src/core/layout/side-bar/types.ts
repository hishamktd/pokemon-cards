export type NavItem = {
  path: string;
  label: string;
  icon?: string;
  root: string;
};

export type SidebarProps = {
  navItems: NavItem[];
  children: React.ReactNode;
};
