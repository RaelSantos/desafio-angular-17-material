import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from './../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioResolver implements Resolve<Usuario> {
  constructor(private service: UsuariosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Usuario> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      id: '',
      nome: '',
      cpf: '',
      renda: 0,
      dataNascimento: new Date(),
    });
  }
}
