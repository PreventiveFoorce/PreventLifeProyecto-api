import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { UsuarioService } from 'src/app/Infrastructure/services/usuario.service';

@Component({
  selector: 'app-donaciones-list',
  templateUrl: './donaciones-list.component.html',
  styleUrls: ['./donaciones-list.component.css']
})
export class DonacionesListComponent implements OnInit {
  public prueba: Array<any> = [];

  displayedColumns: string[] = ['idDonacion', 'usuario', 'montoDonar', 'idOrganizacion','nombreOrganizacion','fechaDonacion'];
  dataSource: MatTableDataSource<Donacion>;

  constructor(
    private donacionService: DonacionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMisDonaciones();
  }

  getMisDonaciones() {
    const userId = sessionStorage.getItem('key');
    const userIdNumber = userId ? Number(userId) : null;
    if (userIdNumber !== null) {
      this.donacionService.getMisDonaciones(userIdNumber).subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data['body']);
        console.log(data['body']);
        console.log(userIdNumber);
      });
    }
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  mover(idDonacion: number) {
    window.location.replace(`${idDonacion}/view`);
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la donación?');
    if (ok) {
      this.donacionService.delete(id).subscribe(() => {
        this.getMisDonaciones();
      });
    }
  }

  crearSolicitud(idDonacion: number) {
    this.router.navigate([`user/solicitudes/${idDonacion}/new`]);
  }
}
