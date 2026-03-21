import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        loadComponent: () =>
          import('../clients/clients.page').then((m) => m.ClientsPage),
      
      },
      {
        path: 'reservations',
        loadComponent: () =>
          import('../reservations/reservation.page').then((m) => m.ReservationPage),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../products/product.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/reservations',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/reservations',
    pathMatch: 'full',
  },
];
