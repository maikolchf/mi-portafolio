import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs'
import { usuario } from 'src/app/models/usuario.model';
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
  datosEnviar: usuario = {
    Id: "ntiRhBJH0akjSBGAyBtA",
    Nombre: "",
    PrimerApellido: "",
    SegundoApellido: "",
    Celular: "",
    Contrasenna: "",
    CorreoElectronico: "",
    Imagen: "",
    PuestoLaboral: ""
  };

 constructor(private apiService: ApiServiceService, private route: ActivatedRoute){}

 ngOnInit(): void {
  this.route.paramMap.subscribe(parametro => {
    console.log(parametro.get('id'))
    this.apiService.obtenerDatos(parametro.get('id') ?? "").subscribe((resp) => {
      if(!resp.hayError){
        this.dataSubject.next(resp.objetoRespuesta);
      }
    })
  }); 
 }
}