import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organizacion } from '../../../Application/models/producto.model';
import { ProductoService } from '../../../Infrastructure/services/producto.service';
import { OrganizacionService } from "../../../Infrastructure/services/organizacion.service";

@Component({
  selector: 'app-edit-organizacion',
  templateUrl: './edit-organizacion.component.html',
  styleUrls: ['./edit-organizacion.component.css']
})
export class EditOrganizacionComponent implements OnInit {
  organizacion: Organizacion;
  id: number;

  constructor(
    public organizacionService: OrganizacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = Number(params.get('id'));
      this.id = idParam; // Asignar el valor de idParam a this.id
      console.log('idOrganizacion:', this.id); // Imprimir el idOrganizacion

      this.organizacionService.get(idParam).subscribe((response: any) => {
        this.organizacion = response.body;
      });
    });
  }

  editOrganizacion(organizacion: Organizacion) {
    const organizacionActualizada: Organizacion = {
      idOrganizacion: this.id,
      nombreOrganizacion: organizacion.nombreOrganizacion,
      descripcionOrganizacion: organizacion.descripcionOrganizacion,
      saldoRecaudado: organizacion.saldoRecaudado
    };

    console.log('edit', organizacionActualizada.idOrganizacion);
    console.log(organizacionActualizada);
    this.organizacionService.update(organizacionActualizada).subscribe(
      () => {
        this.router.navigate(['/admin/organizaciones']);
      },
      (error: any) => {}
    );
  }
}
