import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../../UI/home/index/index.component';
import { LayoutComponent } from '../../UI/home/layout/layout.component';
import {LoginComponent} from "../../UI/Services/login/login.component";
import {RegistrarUsuarioComponent} from "../../UI/registrar/registrar-usuario/registrar-usuario.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path:'register',
        component:RegistrarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
