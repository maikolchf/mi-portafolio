import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { SobremiComponent } from './mantenimiento/sobremi/sobremi.component';
import { TrabajosComponent } from './mantenimiento/trabajos/trabajos.component';
import { IndexMantenimientoComponent } from './mantenimiento/index/index.component';

const routes: Routes = [
  {path:'index/:id',component:IndexComponent},
  {path:'mantenimiento/Index',component:IndexMantenimientoComponent,children:[
    {path:'Usuario', component:UsuarioComponent},
    {path:'SobreMi', component:SobremiComponent},
    {path:'Trabajos',component:TrabajosComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
