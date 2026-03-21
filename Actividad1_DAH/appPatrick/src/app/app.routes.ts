import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'clients',
    loadComponent: () => import('./features/clients/clients.page').then( m => m.ClientsPage)
  },
  {
    path: 'client/:id',
    loadComponent: () => import('./client/client.page').then( m => m.ClientDetailPage)
  },
  {
    path: 'new-reservation',
    loadComponent: () => import('./new-reservation/new-reservation.page').then( m => m.NewReservationPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
