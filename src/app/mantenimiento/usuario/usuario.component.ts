import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { trigger,state,style, animate,transition } from '@angular/animations';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  animations:[
    //se crea para poder hacer el efecto de que el mensaje se oculte con una animación
    trigger('ocultarMensaje',[
      state('void',style({opacity: 1})),
      transition(':leave',[animate('300ms', style({opacity:0}))]),
    ])
  ]
})
export class UsuarioComponent {
  formulario: FormGroup;
  correoElectronico = createMask({alias: 'email'});

  //Esto se debe de sustituir con el resultado que devuelve el api
  mensajeSalida = '';
  claseSalida = '';
  // hasta aqui

  celular = createMask('+(506)99-99-99-99');
  constructor () {
    this.formulario = new FormGroup({
      Id: new FormControl(''),
      Nombre: new FormControl('',[Validators.required]),
      PrimerApellido: new FormControl('',[Validators.required]),
      SegundoApellido: new FormControl('',[Validators.required]),
      PuestoLaboral: new FormControl('',[Validators.required]),
      Celular: new FormControl('',[Validators.required]),
      CorreoElectronico: new FormControl('',[Validators.required]),
      Contrasenna: new FormControl('',[Validators.required]),
      ImgEncabezado: new FormControl('',[Validators.required]),
      ImgPerfil: new FormControl('',[Validators.required])
    });    
  }
  onSumit(){
    if(this.formulario.valid){
      this.mostrarMensaje('¡Datos almacenados correctamente!', 'alert alert-success');
    }else{
      this.mostrarMensaje('¡Debe de completar los campos pendientes!', 'alert alert-danger');
    }
  }

  mostrarMensaje(mensaje: string, clase: string){
    this.mensajeSalida = mensaje;
      this.claseSalida = clase;
      setTimeout(() => {
        this.mensajeSalida = ''
      }, 3000);
  }

  limpiarCampos(){
    Object.keys(this.formulario.controls).forEach(key => {
      this.formulario.get(key)?.setValue('');
    });
  }
}
