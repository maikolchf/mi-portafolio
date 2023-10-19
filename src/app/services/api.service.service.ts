import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { respuesta } from '../models/respuesta.model';
import { usuario } from '../models/usuario.model';
import { sobreMi } from 'src/app/models/sobreMi.model'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = "https://www.miportafolio.somee.com/api";
  constructor(private http: HttpClient) { }

  obtenerDatos(id: string): Observable<respuesta> {
    return this.http.get<respuesta>(`${this.apiUrl}/DatosPortafolio/${id}`);
  }

  actualizarUsuario(dato: any): Observable<respuesta> {
    return this.http.post<respuesta>(`${this.apiUrl}/Usuario/PostModificarUsuario`, dato, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        })
    });
  }

  obtenerDatosSobreMi(filtro: usuario) {
    return this.http.post<respuesta>(`${this.apiUrl}/SobreMi/ObtenerSobreMi`, filtro, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        })
    });
  }

  insertarDatoSobreMi(dato:sobreMi){
    return this.http.post<respuesta>(`${this.apiUrl}/SobreMi/InsertarSobreMi`, dato, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        })
    });
  }

  eliminarRegistroSobreMi(filtro:sobreMi){
    return this.http.post<respuesta>(`${this.apiUrl}/SobreMi/EliminarSobreMi`, filtro, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        })
    });
  }
}