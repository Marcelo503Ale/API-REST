import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AdminUsuarioComponent } from './usuario/pages/admin-usuario/admin-usuario.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { AdmProductoComponent } from './productos/pages/adm-producto/adm-producto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: AdminUsuarioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'productos',
    component: AdmProductoComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
