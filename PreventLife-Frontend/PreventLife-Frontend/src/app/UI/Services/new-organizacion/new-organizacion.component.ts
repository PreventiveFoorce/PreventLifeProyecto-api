import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organizacion } from '../../../Application/models/producto.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductoService } from '../../../Infrastructure/services/producto.service';
import {OrganizacionService} from "../../../Infrastructure/services/organizacion.service";

@Component({
  selector: 'app-new-organizacion',
  templateUrl: './new-organizacion.component.html',
  styleUrls: ['./new-organizacion.component.css']
})
export class NewOrganizacionComponent implements OnInit {


  constructor(public organizacionService: OrganizacionService, private router: Router,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  createOrganizacion(organizacion:Organizacion) {
    this.organizacionService.create(organizacion).subscribe(

      (res) => {
        console.log(res);
        this.router.navigate(['/admin/organizaciones']);
      },
      (err) => {
        console.log(err);
      }

    );
    this._snackBar.open('Organizacion registrada!!', 'OK', {
      duration: 3000
    });

  }
}
