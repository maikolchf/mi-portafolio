import { Component, OnInit } from '@angular/core';
import { usuario } from './models/usuario.model';
import { ApiServiceService } from './services/api.service.service';
import { BehaviorSubject } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'mi-portafolio';
 constructor(private router: Router){
  //this.router.navigateByUrl('/index/ntiRhBJH0akjSBGAyBtA');
 }

}
