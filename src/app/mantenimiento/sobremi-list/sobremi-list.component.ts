import { Component, OnInit } from '@angular/core';
import { IndexMantenimientoComponent } from '../index/index.component';

@Component({
  selector: 'app-sobremi-list',
  templateUrl: './sobremi-list.component.html',
  styleUrls: ['./sobremi-list.component.scss']
})
export class SobremiListComponent implements OnInit{
  sobreMi:any;
  constructor(private data: IndexMantenimientoComponent){}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.data.usuario$.subscribe(item => {
      if(item){
        this.sobreMi = item.sobreMi;
      }
    });
  }
}
