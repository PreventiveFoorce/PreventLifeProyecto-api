import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Organizacion } from '../../../Application/models/product.model';
import { OrganizacionService } from "../../../Infrastructure/services/organizacion.service";

@Component({
  selector: 'app-organizacion-list',
  templateUrl: './organizacion-list.component.html',
  styleUrls: ['./organizacion-list.component.css']
})
export class ProductoListComponent implements OnInit {

  displayedColumns: string[] = ['idOrganizacion', 'nombreOrganizacion', 'descripcionOrganizacion','Donar'];
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

  donar(idOrganizacion: number) {
    if (sessionStorage.getItem('key') == null) {
      const ok = confirm('Debes iniciar sesión para poder donar');
      if (ok) {
        window.location.replace(`../login`);
      }
    } else {
      window.location.replace(`../user/donar?idOrganizacion=${idOrganizacion}`);
    }
  }

}
