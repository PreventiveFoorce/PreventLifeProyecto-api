import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Organizacion } from '../../../Application/models/producto.model';
import { ProductoService } from '../../../Infrastructure/services/producto.service';
import {OrganizacionService} from "../../../Infrastructure/services/organizacion.service";
import {MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-organizaciones-list',
  templateUrl: './organizaciones-list.component.html',
  styleUrls: ['./organizaciones-list.component.css']
})
export class OrganizacionesListComponent implements OnInit {

  displayedColumns: string[] = ['idOrganizacion', 'nombreOrganizacion', 'descripcionOrganizacion','saldoRecaudado','Acciones'];
  dataSource: MatTableDataSource<Organizacion>;

  constructor(private organizacionService: OrganizacionService) { }

  ngOnInit(): void {
    this.getAllOrganizaciones();
  }

  getAllOrganizaciones() {
    this.organizacionService.getAllOrganizaciones().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      console.log("ID del usuario:", data.id); // Aquí se imprime el ID del usuario
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el producto?');
    if (ok) {
      this.organizacionService.delete(id).subscribe(() => {
        this.getAllOrganizaciones();
      });
    }
  }

}
