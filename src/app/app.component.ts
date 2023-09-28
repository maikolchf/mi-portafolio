import { Component, OnInit } from '@angular/core';
import { usuario } from './models/usuario.model';
import { ApiServiceService } from './services/api.service.service';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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

 constructor(private apiService: ApiServiceService){}

 ngOnInit(): void {
  this.apiService.obtenerDatos(this.datosEnviar.Id).subscribe((resp) => {
    if(!resp.hayError){
      this.dataSubject.next(resp.objetoRespuesta);
    }
  })
 }
}
