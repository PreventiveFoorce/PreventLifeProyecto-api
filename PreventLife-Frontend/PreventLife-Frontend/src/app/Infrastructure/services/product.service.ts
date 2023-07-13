import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { Organizacion } from '../../Application/models/product.model';

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

  agregarAlCarrito(idUsuario: number, idProducto: number){
    return this.http.put(`${this.apiBase}/usuarios/${idUsuario}/milista/${idProducto}`, null);
  }

}
