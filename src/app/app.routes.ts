import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {RegisterComponent} from './auth/register/register.component';
import { RoomComponent } from './shared/room/room.component';
import { LoginComponent } from './auth/login/login.component';
export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent as typeof LoginComponent),
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
        path: 'room/:id', component: RoomComponent
      }
    ]
  },
  {
    path: 'action-bar', loadChildren: () => import('./shared/router-outlet').then(m => m.routeShared) 
  },
  {
    path: 'recover-password', component: RegisterComponent
  },
];
