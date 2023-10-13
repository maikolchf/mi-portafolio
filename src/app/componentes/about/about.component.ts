import { Component } from '@angular/core';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  puesto: string = "";
  img_perfil: string = '';
  info_Sobre_mi: any = [];  

 constructor(private data: IndexComponent){
  data.usuario$.subscribe((item) => {
    if(item){
      this.puesto = item.usuario.puestoLaboral;
      this.info_Sobre_mi = item.sobreMi;
      this.img_perfil = item.usuario.imagenPerfil;
    }     
  });
 }
}
