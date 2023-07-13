import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from '../../Application/mapping/user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProductoListComponent } from '../../UI/Services/organizacion-list/organizacion-list.component';
import { MaterialModule } from '../../Infrastructure/material/material.module';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import { DonarApartadoComponent } from '../../UI/Services/donar-apartado/donar-apartado.component';
import { FormDonacionComponent } from '../../UI/Forms/form-donacion/form-donacion.component';
import { PagarDonacionComponent } from '../../UI/Services/donar-apartado/pagar-donacion/pagar-donacion.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DonacionesListComponent } from '../../UI/Services/donar-apartado/donaciones-list/donaciones-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductoListComponent,
    LayoutComponent,
    DonarApartadoComponent,
    FormDonacionComponent,
    PagarDonacionComponent,
    DonacionesListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class UserModule { }
