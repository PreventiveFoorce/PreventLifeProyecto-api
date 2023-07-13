import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../Domain/admin/layout/layout.component';
import { EditOrganizacionComponent } from '../../UI/Services/edit-organizacion/edit-organizacion.component';
import { NewOrganizacionComponent } from '../../UI/Services/new-organizacion/new-organizacion.component';
import { OrganizacionesListComponent } from '../../UI/Services/organizaciones-list/organizaciones-list.component';
import { DonacionListComponent } from '../../UI/Services/donaciones/donaciones.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'organizaciones',
        component: OrganizacionesListComponent,
      },
      {
        path: 'organizaciones/new',
        component: NewOrganizacionComponent,
      },
      {
        path: 'organizaciones/:id/edit',
        component: EditOrganizacionComponent,
      },
      {
        path: 'donaciones',
        component: DonacionListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
