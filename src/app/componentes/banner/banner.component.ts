import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  nombre: string = "Michael Chavarria Flores";
  imagen : string = `url("../../../assets/img/banner1.png")`;
}
