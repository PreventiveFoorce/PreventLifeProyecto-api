import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { UsuarioService } from 'src/app/Infrastructure/services/usuario.service';
import { Organizacion } from 'src/app/Application/models/organizacion.model';

@Component({
  selector: 'app-donar-apartado',
  templateUrl: './donar-apartado.component.html',
  styleUrls: ['./donar-apartado.component.css']
})
export class DonarApartadoComponent implements OnInit {
  idOrganizacion: number; // Variable para almacenar el idOrganizacion

  constructor(
    public donacionService: DonacionService,
    private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.idOrganizacion = queryParams['idOrganizacion'];
      console.log(this.idOrganizacion);
    });
  }

  createDonacionService(donacion: Donacion) {
    donacion.idOrganizacion = this.idOrganizacion;
    this.donacionService.crearDonacion(donacion).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/user'], {queryParams: {idOrganizacion: this.idOrganizacion}});
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
