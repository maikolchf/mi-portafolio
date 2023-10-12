import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { usuario } from '../models/usuario.model';
import { respuesta } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = "https://maikolchf.bsite.net/api";
  constructor(private http: HttpClient) {}

   obtenerDatos (id: string): Observable<respuesta> {    
    return this.http.get<respuesta>(`${this.apiUrl}/DatosPortafolio/${id}`);
   }

   actualizarUsuario(dato: any): Observable<respuesta>{
    const formData = new FormData();
    formData.append('value', JSON.stringify(dato))
    return this.http.post<respuesta>(`${this.apiUrl}/Usuario/PostModificarUsuario`,formData);
   }
}