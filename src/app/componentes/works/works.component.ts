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
  descripcion: "",
  link: "https://www.babelgroup.com/"
}];


}
