import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonacionesListComponent } from '../../UI/Services/donar-apartado/donaciones-list/donaciones-list.component';
import { DonarApartadoComponent } from '../../UI/Services/donar-apartado/donar-apartado.component';
import { PagarDonacionComponent } from '../../UI/Services/donar-apartado/pagar-donacion/pagar-donacion.component';
import { LayoutComponent } from '../../Domain/user/layout/layout.component';
import { ProductoListComponent } from '../../UI/Services/organizacion-list/organizacion-list.component';

const routes: Routes = [
  {

    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductoListComponent,
      },
      {
        path: 'donar',
          component: DonarApartadoComponent,

      },
      {
        path: 'misdonaciones',
        component: DonacionesListComponent,
      },
      {
        path: 'pagar-donacion',
        component: PagarDonacionComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
