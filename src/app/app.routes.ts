import { Routes } from '@angular/router';
export const routes: Routes = [
{
  path: 'auth',
  loadComponent: () => import ('./auth/login/login.component'),
  children: [                                                         //Rutas Hijas

    {
      path: '',
      redirectTo: 'control-flow',
      pathMatch: 'full'
    }
  ]
},
{                                                                     //Para redireccionar al login
  path: '**',
  redirectTo: '/auth',
  pathMatch: 'full'
}
];
