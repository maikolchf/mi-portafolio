import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

trabajos: any = [{
  id: 1,
  img: "../../../assets/img/logoBabel.png",
  titulo: "BABEL",
  descripcion: "Desarrollo de software con lenguajes en .net core, javascript, html5, css3, jquery y reporting services.",
  link: `https://www.babelgroup.com/`,
  fecha: "Feb 2020 - Actualmente"
}];


}
