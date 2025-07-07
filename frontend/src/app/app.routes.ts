import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { Error404Component } from './pages/errors/error-404/error-404.component';

export const routes: Routes = [
  // Ruta raíz redirige al login
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  // Ruta específica para 404
  { path: '404', component: Error404Component },
  
  // Ruta wildcard para manejar rutas no encontradas
  { path: '**', redirectTo: '/404' }
];