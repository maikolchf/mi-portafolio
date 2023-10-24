import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { SobremiComponent } from './mantenimiento/sobremi-agregar/sobremi.component';
import { TrabajosComponent } from './mantenimiento/trabajos/trabajos.component';
import { IndexMantenimientoComponent } from './mantenimiento/index/index.component';
import { LoginComponent } from './mantenimiento/login/login.component';
import { SobremiListComponent } from './mantenimiento/sobremi-list/sobremi-list.component';
import { SobremiEditarComponent } from './mantenimiento/sobremi-editar/sobremi-editar.component';

const routes: Routes = [
  { path: '', redirectTo: 'index/ntiRhBJH0akjSBGAyBtA', pathMatch: 'full' },
  { path: 'index/:id', component: IndexComponent },
  {
    path: 'mantenimiento/index', component: IndexMantenimientoComponent, children: [
      { path: 'Usuario', component: UsuarioComponent },
      { path: 'Trabajos', component: TrabajosComponent },
      {
        path: 'SobreMi-list', component: SobremiListComponent, children: [
          { path: 'SobreMi-agregar', component: SobremiComponent },
          { path: 'SobreMi-editar/:id', component: SobremiEditarComponent}
        ]
      }
    ]
  },
  { path: 'mantenimiento/login', component: LoginComponent },
  { path: '**', redirectTo: 'index/ntiRhBJH0akjSBGAyBtA' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
