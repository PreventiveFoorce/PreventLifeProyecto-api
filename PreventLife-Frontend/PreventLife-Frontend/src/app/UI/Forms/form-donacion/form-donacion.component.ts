import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DonacionService } from 'src/app/Infrastructure/services/donacion.service';
import { Donacion } from 'src/app/Application/models/donacion.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-donacion',
  templateUrl: './form-donacion.component.html',
  styleUrls: ['./form-donacion.component.css']
})
export class FormDonacionComponent implements OnInit {
  form: FormGroup;
  date: Date = new Date();
  @Input() donacion: Donacion = new Donacion();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    //private donacionService: DonacionService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      usuario: {
        idUsuario: this.donacion.usuario = Number(sessionStorage.getItem('key')),
      },
      montoDonar: [
        this.donacion.montoDonar, [Validators.required, Validators.max(16000)]
      ],
      metodoPago: [
        'Tarjeta de credito',
      ]
    });

    // Suscribirse a los queryParams y obtener el idOrganizacion
    this.route.queryParams.subscribe(queryParams => {
      const idOrganizacion = queryParams['idOrganizacion'];
      this.donacion.idOrganizacion = idOrganizacion;
    });
  }

  save() {
    const montoDonar = this.form.get('montoDonar')?.value;
    sessionStorage.setItem('monto_donar', montoDonar);

    const idOrganizacion = this.donacion.idOrganizacion;
    sessionStorage.setItem('id_organizacion', String(idOrganizacion));

    this.router.navigate(['/user/pagar-donacion']);
  }
}
