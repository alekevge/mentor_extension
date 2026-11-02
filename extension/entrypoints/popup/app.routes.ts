// entrypoints/popup/app.routes.ts
import { Routes } from '@angular/router';
import { LayoutPage } from './pages/LayoutPage/layoutPage.component';

export const routes: Routes = [

  { path: '', component: LayoutPage, children:[ 
    {
      path: 'login',
      loadComponent: () => import('./pages/LoginPage/loginPage.component').then(m => m.LoginPage),
    },
    {
      path: 'registration',
      loadComponent: () => import('./pages/RegistrationPage/registrationPage.component').then(m => m.RegistrationPage),
    },
  ]},
  { path:'**', redirectTo: 'login'
    
  }
];