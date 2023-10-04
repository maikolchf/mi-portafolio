import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  formulario: FormGroup;
  constructor () {
    this.formulario = new FormGroup({
      Id: new FormControl(''),
      Nombre: new FormControl(''),
      PrimerApellido: new FormControl(''),
      SegundoApellido: new FormControl(''),
      PuestoLaboral: new FormControl(''),
      Celular: new FormControl(''),
      CorreoElectronico: new FormControl(''),
      Contrasenna: new FormControl(''),
      ImgEncabezado: new FormControl(''),
      ImgPerfil: new FormControl('')
    });    
  }
  onSumit(){
    console.log(this.formulario)
  }
}
