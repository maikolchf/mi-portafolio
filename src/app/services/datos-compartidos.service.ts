import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {

  private obtenerDatosSobreMi = new BehaviorSubject<boolean>(false);
  constructor() { }

  setObtenerDatosSobreMi(dato: boolean){
    this.obtenerDatosSobreMi.next(dato);
  }

  getObtenerDatosSobreMi(){
    return this.obtenerDatosSobreMi.asObservable();
  }

}
