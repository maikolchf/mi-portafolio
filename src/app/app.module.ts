import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AboutComponent } from './componentes/about/about.component';
import { WorksComponent } from './componentes/works/works.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './componentes/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuLateralComponent } from './mantenimiento/menu-lateral/menu-lateral.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';
import { SobremiComponent } from './mantenimiento/sobremi-agregar/sobremi.component';
import { TrabajosComponent } from './mantenimiento/trabajos/trabajos.component'
import { IndexMantenimientoComponent } from './mantenimiento/index/index.component'
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';
import { LoginComponent } from './mantenimiento/login/login.component';
import { SobremiListComponent } from './mantenimiento/sobremi-list/sobremi-list.component';
import { SobremiEditarComponent } from './mantenimiento/sobremi-editar/sobremi-editar.component';
import { LoadingComponent } from './componentes/loading/loading.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    WorksComponent,
    FooterComponent,
    IndexComponent,
    MenuLateralComponent,
    UsuarioComponent,
    SobremiComponent,
    TrabajosComponent,
    IndexMantenimientoComponent,
    LoginComponent,
    SobremiListComponent,
    SobremiEditarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
