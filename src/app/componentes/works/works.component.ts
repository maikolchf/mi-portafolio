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