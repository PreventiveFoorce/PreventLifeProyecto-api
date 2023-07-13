import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { Organizacion } from '../../Application/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllOrganizaciones() {
    return this.http.get<Organizacion[]>(`${this.apiBase}/organizaciones`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/organizaciones/${id}`);
  }

  create(organizacion: Organizacion) {
    return this.http.post(`${this.apiBase}/organizaciones`, organizacion);
  }

  update(organizacion: Organizacion) {
    return this.http.put(`${this.apiBase}/organizaciones`, organizacion);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/organizaciones/${id}`);
  }
}
