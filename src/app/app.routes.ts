import { RouterModule, Routes } from '@angular/router';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { MiembroComponent } from './components/miembros/miembro.component';

const app_routes: Routes = [
  { path: 'miembros', component: MiembrosComponent },
  { path: 'miembro/:id', component: MiembroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'miembros' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
