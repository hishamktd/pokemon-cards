const navigation = {
  dashboard: { root: '/dashboard', path: '/dashboard', label: 'Dashboard' },
  stages: { root: '/stages', path: '/stages', label: 'Stages' },
  attacks: { root: '/attacks', path: '/attacks', label: 'Attacks' },
  prototypes: {
    root: '/prototypes',
    path: '/prototypes/buttons',
    label: 'Prototypes',
    children: [
      { path: '/prototypes/buttons', label: 'Buttons' },
      { path: '/prototypes/titles', label: 'Titles' },
      { path: '/prototypes/button-groups', label: 'Button Groups' },
      { path: '/prototypes/inputs', label: 'Inputs' },
      { path: '/prototypes/tables', label: 'Tables' },
      { path: '/prototypes/drawer', label: 'Drawer' },
    ],
  },
  master: { root: '/master', path: '/master', label: 'Master' },
};

export default navigation;
