import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  // private readonly API = 'https://localhost:7064/api/v1/usuarios';
  // private readonly API = '/src/assets/usuarios.json';
  private readonly API = 'api/v1/usuarios';

  constructor(private httpClient: HttpClient) {}

  list2(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.API).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Usuario>(`${this.API}/${id}`);
  }

  save(record: Partial<Usuario>) {
    if (record.id) {
      return this.update(record);
    }

    return this.create(record);
  }

  private create(record: Partial<Usuario>) {
    return this.httpClient.post<Usuario>(this.API, record).pipe(first());
  }

  private update(record: Partial<Usuario>) {
    return this.httpClient
      .put<Usuario>(`${this.API}/${record.id}`, record)
      .pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
