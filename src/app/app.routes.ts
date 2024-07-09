import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'municipios/:id',
    loadComponent: () => import('./pages/municipios/municipios.page').then( m => m.MunicipiosPage)
  },
  {
    path: 'localidades/:id',
    loadComponent: () => import('./pages/localidades/localidades.page').then( m => m.LocalidadesPage)
  },
];
