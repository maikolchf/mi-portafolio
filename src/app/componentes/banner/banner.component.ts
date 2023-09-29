import { Component } from '@angular/core';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{
  nombre: string = "Michael Chavarria Flores";
  imagen : string = `url("../../../assets/img/banner1.JPEG")`;
  constructor(private data: IndexComponent){
    data.usuario$.subscribe((item) => {
      if(item){
        this.nombre = (item.usuario.nombre +" "+ item.usuario.primerApellido +" "+ item.usuario.segundoApellido);
        this.imagen = `'url("../../../assets/img/${item.usuario.imagen})'`;
      }     
    });
  }  
}
