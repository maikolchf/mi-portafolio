import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs'
import { ApiServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit{
  title = 'mi-portafolio';
  private dataSubject = new BehaviorSubject<any>(null);
  public usuario$ = this.dataSubject.asObservable();
  mostrarLoading = true;

 constructor(private apiService: ApiServiceService, private route: ActivatedRoute){}

 ngOnInit(): void {
  this.route.paramMap.subscribe(parametro => {
    this.apiService.obtenerDatos(parametro.get('id') ?? "").subscribe((resp) => {
      if(!resp.hayError){
        this.dataSubject.next(resp.objetoRespuesta);
        this.mostrarLoading = false;
      }
    })
  }); 
 }
 
}