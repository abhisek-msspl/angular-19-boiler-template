import { Routes } from '@angular/router';
// import { authGuard, adminGuard } from './core/guards';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [adminGuard],
    loadComponent: () =>
      import('./core/layouts/auth/auth-layout/auth-layout.component').then(
        c => c.AuthLayoutComponent
      ),
    loadChildren: () => import('./pages/auth/auth.routes').then(r => r.routes),
  },
  {
    path: '',
    // canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layouts/admin/admin-layout/admin-layout.component').then(
        c => c.AdminLayoutComponent
      ),
    loadChildren: () => import('./pages/admin/admin.routes').then(r => r.routes),
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
