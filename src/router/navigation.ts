export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  path: string;
  children?: NavigationItem[];
}

export const navigationConfig: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    children: [
      {
        id: 'dashboard-ui',
        label: 'UI Components',
        path: '/dashboard/ui-components',
      },
      {
        id: 'dashboard-forms',
        label: 'Form Components',
        path: '/dashboard/form-components',
      },
      {
        id: 'dashboard-layout',
        label: 'Layout Components',
        path: '/dashboard/layout-components',
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    icon: 'info',
    path: '/about',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
    path: '/settings',
  },
  {
    id: 'privacy',
    label: 'Privacy',
    icon: 'shield',
    path: '/privacy',
  },
];
