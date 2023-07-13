import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from '../../Application/mapping/admin-routing.module';
import { NewOrganizacionComponent } from '../../UI/Services/new-organizacion/new-organizacion.component';
import { OrganizacionesListComponent } from '../../UI/Services/organizaciones-list/organizaciones-list.component';
import { EditOrganizacionComponent } from '../../UI/Services/edit-organizacion/edit-organizacion.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../../Infrastructure/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormOrganizacionComponent
} from '../../UI/Forms/form-organizacion/form-organizacion.component';
import { MatSelectModule } from '@angular/material/select';
import { DonacionListComponent } from '../../UI/Services/donaciones/donaciones.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NewOrganizacionComponent,
    OrganizacionesListComponent,
    EditOrganizacionComponent,
    LayoutComponent,
    DonacionListComponent,
    FormOrganizacionComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class AdminModule { }
