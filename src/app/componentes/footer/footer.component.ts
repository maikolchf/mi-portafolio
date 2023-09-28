import { Component } from '@angular/core';
import { usuario } from '../../models/usuario.model'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    anno: number = obtenerAnno();
    user : usuario;

    constructor(){
      this.user = obtenerInfoUsuario ()
    }
}

function obtenerAnno(): number {
  const fechaActual = new Date();
  return fechaActual.getFullYear();
}

function obtenerInfoUsuario (): usuario {  
  return {
    Id: "0",
    Nombre: "Michael",
    PrimerApellido: "Chavarria",
    SegundoApellido: "Flores",
    Celular: "+506 86588363",
    CorreoElectronico: "maikolchf@outlook.com",
    Contrasenna: "",
    Imagen: "",
    PuestoLaboral: ""
  }
}