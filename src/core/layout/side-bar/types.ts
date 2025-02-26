export type NavItem = {
  path: string;
  label: string;
  icon?: string;
  children?: NavItem[];
};

export type SidebarProps = {
  navItems: NavItem[];
  children: React.ReactNode;
};
