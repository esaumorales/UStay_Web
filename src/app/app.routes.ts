import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {RegisterComponent} from './auth/register/register.component';
export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/login/login.component'),
    children: [                                                         //Rutas Hijas
      {
        path: '',
        redirectTo: 'RegisterComponent',
        pathMatch: 'full'
      }
    ]
  },
  {                                                                     //Para redireccionar al login
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    children: [                                                         //Rutas Hijas
      {
        path: '', component: MainLayoutComponent
      },
      {
        path: '', loadChildren: () => import('./shared/router-outlet').then(m => m.routeShared) 
      }
    ]
  },
  {
    path: 'recover-password', component: RegisterComponent
  },
];
