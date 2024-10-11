export const URL = {
  HOME: '/providence',
  ROSTER: '/providence/roster',
  RECRUTEMENT: '/providence/recrutement',
  RECRUTEMENTS: '/providence/dashboard/recrutements',
  RECRUTEMENT_CONFIRMATION: '/providence/recrutement/confirmation',
  PARAMS: '/providence/dashboard/parametres ',
  DASHBOARD: '/providence/dashboard',
  LOGIN: '/providence/login',
  PROFILE: '/providence/profile',
};

export const navigation = [
  { name: 'Presentation', href: URL.HOME },
  { name: 'Postuler', href: URL.RECRUTEMENT },
  { name: 'Dashboard', href: URL.DASHBOARD },
];

export const dashboardNavigation = [
  { name: 'Dashboard', href: URL.DASHBOARD },
  { name: 'Recrutements', href: URL.RECRUTEMENTS },
  { name: 'Paramètres', href: URL.PARAMS },
];
