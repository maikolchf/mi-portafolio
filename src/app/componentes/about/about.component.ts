import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { sobreMi } from 'src/app/models/sobreMi.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  puesto: string = "";
  img_perfil: string = '../../../assets/img/Img-perfil.png';
  info_Sobre_mi: any = [];  

 constructor(private data: AppComponent){
  data.usuario$.subscribe((item) => {
    if(item){
      this.puesto = item.usuario.puestoLaboral;
      this.info_Sobre_mi = item.sobreMi;
    }     
  });
 }
}
