import { Component } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { expeLaboral } from 'src/app/models/expeLaboral.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  trabajos : any;
  constructor(private data: IndexComponent) {
    data.usuario$.subscribe((item) => {
      if(item){
        this.trabajos = item.expeLaboral;
      }     
    });
  }
}

/*
 this.nombre = (item.usuario.nombre +" "+ item.usuario.primerApellido +" "+ item.usuario.segundoApellido);
      this.imagen = `'url("../../../assets/img/${item.usuario.imagen})'`;
      */