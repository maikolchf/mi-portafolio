import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { SobremiComponent } from './mantenimiento/sobremi/sobremi.component';
import { TrabajosComponent } from './mantenimiento/trabajos/trabajos.component';
import { IndexMantenimientoComponent } from './mantenimiento/index/index.component';
import { LoginComponent } from './mantenimiento/login/login.component';
import { SobremiListComponent } from './mantenimiento/sobremi-list/sobremi-list.component';

const routes: Routes = [
  {path:'',redirectTo:'index/ntiRhBJH0akjSBGAyBtA', pathMatch:'full'},
  {path:'index/:id',component:IndexComponent},
  {path:'mantenimiento/index',component:IndexMantenimientoComponent,children:[
    {path:'Usuario', component:UsuarioComponent},
    {path:'SobreMi', component:SobremiComponent},
    {path:'Trabajos',component:TrabajosComponent},
    {path:'SobreMi-list',component:SobremiListComponent}
  ]},
  {path:'mantenimiento/login', component:LoginComponent},
  {path:'**',redirectTo:'index/ntiRhBJH0akjSBGAyBtA'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
