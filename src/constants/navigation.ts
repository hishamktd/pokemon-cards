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
      { path: '/prototypes/inputs', label: 'Inputs' },
      { path: '/prototypes/tables', label: 'Tables' },
      { path: '/prototypes/titles', label: 'Layout' },
    ],
  },
};

export default navigation;
