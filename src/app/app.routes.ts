import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { SessionGuard } from './core/guards/session.guard';

// equivale a app-routing.modules.ts

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path: '',
    component:HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate:[SessionGuard]
  },

    // ejemplo de ruta 
    // { path: 'fruta', component: FrutaComponent },
    // Otras rutas pueden agregarse aquí
  ];