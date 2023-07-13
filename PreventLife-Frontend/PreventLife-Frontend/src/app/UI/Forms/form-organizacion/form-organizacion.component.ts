import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Organizacion } from 'src/app/Application/models/organizacion.model';
import { OrganizacionService } from '../../../Infrastructure/services/organizacion.service';

@Component({
  selector: 'app-form-organizacion',
  templateUrl: './form-organizacion.component.html',
  styleUrls: ['./form-organizacion.component.css']
})
export class FormOrganizacionComponent implements OnInit {
  @Input() organizacion: Organizacion;
  form: FormGroup;
  disabled: boolean = false;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private organizacionService: OrganizacionService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombreOrganizacion: ['', Validators.required],
      descripcionOrganizacion: ['', Validators.required],
      saldoRecaudado: [0]
    });

    if (this.organizacion) {
      this.form.patchValue({
        nombreOrganizacion: this.organizacion.nombreOrganizacion,
        descripcionOrganizacion: this.organizacion.descripcionOrganizacion,
        saldoRecaudado: this.organizacion.saldoRecaudado
      });
      this.disabled = true;
    }
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const organizacion: Organizacion = {
      idOrganizacion: this.organizacion ? this.organizacion.idOrganizacion : -1,
      nombreOrganizacion: this.form.value.nombreOrganizacion,
      descripcionOrganizacion: this.form.value.descripcionOrganizacion,
      saldoRecaudado: this.form.value.saldoRecaudado
    };

    this.onSubmit.emit(organizacion);
  }

  cancelar() {
    this.location.back();
  }
}
