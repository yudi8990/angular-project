import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '',
    component: Layout,
    children: [
      {
        path: '', component: Dashboard,
      },
      
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
