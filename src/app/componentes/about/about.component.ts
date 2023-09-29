import { Component } from '@angular/core';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  puesto: string = "";
  img_perfil: string = '../../../assets/img/Img-perfil.JPEG';
  info_Sobre_mi: any = [];  

 constructor(private data: IndexComponent){
  data.usuario$.subscribe((item) => {
    if(item){
      this.puesto = item.usuario.puestoLaboral;
      this.info_Sobre_mi = item.sobreMi;
    }     
  });
 }
}
