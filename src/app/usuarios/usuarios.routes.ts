import { Routes } from '@angular/router';
import { UsuariosComponent } from './containers/usuarios/usuarios.component';
import { UsuarioFormComponent } from './containers/usuario-form/usuario-form.component';
import { UsuarioResolver } from './guards/usuario.resolve';

export const USERS_ROUTES: Routes = [
  { path: '', component: UsuariosComponent },
  {
    path: 'new',
    component: UsuarioFormComponent,
    resolve: { usuario: UsuarioResolver },
  },
  {
    path: 'edit/:id',
    component: UsuarioFormComponent,
    resolve: { usuario: UsuarioResolver },
  },
];
