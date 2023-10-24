import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api.service.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexMantenimientoComponent implements OnInit {

  private dataSubject = new BehaviorSubject<any>(null);
  public dataSobreMi = new BehaviorSubject<any>(null);
  public usuario$ = this.dataSubject.asObservable();
  public SobreMi = this.dataSobreMi.asObservable()

  constructor(private apiService: ApiServiceService){}

 ngOnInit(): void {
    this.apiService.obtenerDatos("ntiRhBJH0akjSBGAyBtA").subscribe((resp) => {
      if(!resp.hayError){
        this.dataSubject.next(resp.objetoRespuesta);
        this.dataSobreMi.next(resp.objetoRespuesta.sobreMi);
      }
    }) 
 }
}
