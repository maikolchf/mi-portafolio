import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { respuesta } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = "https://www.miportafolio.somee.com/api";
  constructor(private http: HttpClient) {}

   obtenerDatos (id: string): Observable<respuesta> {    
    return this.http.get<respuesta>(`${this.apiUrl}/DatosPortafolio/${id}`,{headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })});
   }

   actualizarUsuario(dato: any): Observable<respuesta>{
    return this.http.post<respuesta>(`${this.apiUrl}/Usuario/PostModificarUsuario`,dato, { headers: new HttpHeaders(
      { 
        'Content-Type': 'application/json',
      })
    });
   }
}