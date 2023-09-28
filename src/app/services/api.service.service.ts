import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable } from 'rxjs'
import { usuario } from '../models/usuario.model';
import { respuesta } from '../models/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = "https://maikolchf.bsite.net/api/DatosPortafolio";
  constructor(private http: HttpClient) {}

   obtenerDatos (id: string): Observable<respuesta> {    
    return this.http.get<respuesta>(`${this.apiUrl}/${id}`);
   }
}