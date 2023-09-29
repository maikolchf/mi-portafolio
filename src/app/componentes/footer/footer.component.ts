import { Component } from '@angular/core';
import { usuario } from '../../models/usuario.model'
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    anno: number = obtenerAnno();
    user : any;

    constructor(private data: IndexComponent){
      data.usuario$.subscribe((item) => {
        if(item){
          this.user = item.usuario;
        }     
      });
    }
}

function obtenerAnno(): number {
  const fechaActual = new Date();
  return fechaActual.getFullYear();
}
