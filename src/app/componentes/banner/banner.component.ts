import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ApiServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{
  nombre: string = "Michael Chavarria Flores";
  imagen : string = `url("../../../assets/img/banner1.JPEG")`;
  constructor(private data: AppComponent){
    data.usuario$.subscribe((item) => {
      if(item){
        this.nombre = (item.usuario.nombre +" "+ item.usuario.primerApellido +" "+ item.usuario.segundoApellido);
        this.imagen = `'url("../../../assets/img/${item.usuario.imagen})'`;
      }     
    });
  }  
}
