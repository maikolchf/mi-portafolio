import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { trigger,state,style, animate,transition } from '@angular/animations';
import { usuario } from 'src/app/models/usuario.model';
import { Observable, from, of, switchMap } from 'rxjs';
import { IndexMantenimientoComponent } from '../index/index.component';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';

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
export class UsuarioComponent implements OnInit{
  formulario: FormGroup  = new FormGroup({
    Id: new FormControl(''),
    Nombre: new FormControl('',[Validators.required]),
    PrimerApellido: new FormControl('',[Validators.required]),
    SegundoApellido: new FormControl('',[Validators.required]),
    PuestoLaboral: new FormControl('',[Validators.required]),
    Celular: new FormControl('',[Validators.required]),
    CorreoElectronico: new FormControl('',[Validators.required]),
    Contrasenna: new FormControl(''),
    ImgEncabezado: new FormControl(''),
    ImgPerfil: new FormControl('')
  });  
  correoElectronico = createMask({alias: 'email'});
  celular = createMask('+(506)99-99-99-99');

  //Esto se debe de sustituir con el resultado que devuelve el api
  mensajeSalida = '';
  claseSalida = '';
  idUsuario ='';
  // hasta aqui

  imagenBanner: any = null;
  imagenPerfil: any = null;
  constructor (private data: IndexMantenimientoComponent,private apiService: ApiServiceService, private storage: FirebaseStorageService) {}
  
  onSumit(){
    if(this.formulario.valid){

      this.construirObjetoInsertar(this.formulario).subscribe((item) => {
        this.guardarDatos(item);
      });      
    }else{
      this.mostrarMensaje('¡Debe de completar los campos pendientes!', 'alert alert-warning');
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

  llenarFormulario(){
    this.data.usuario$.subscribe((item) => {
      if(item){
        this.formulario.get('Id')?.setValue(item.usuario.id);
        this.formulario.get('Nombre')?.setValue(item.usuario.nombre);
        this.formulario.get('PrimerApellido')?.setValue(item.usuario.primerApellido);
        this.formulario.get('SegundoApellido')?.setValue(item.usuario.segundoApellido);
        this.formulario.get('PuestoLaboral')?.setValue(item.usuario.puestoLaboral);
        this.formulario.get('Celular')?.setValue(item.usuario.celular);
        this.formulario.get('CorreoElectronico')?.setValue(item.usuario.correoElectronico);     
      }     
    }); 
  }

  construirObjetoInsertar(form: FormGroup): Observable<usuario> {
    return this.data.usuario$.pipe(
      switchMap((item) => {
        const dato: usuario = {
          id: form.get('Id')?.value,
          celular: form.get('Celular')?.value,
          contrasenna: form.get('Contrasenna')?.value ? form.get('Contrasenna')?.value : item.usuario.contrasenna,
          correoElectronico: form.get('CorreoElectronico')?.value,          
          nombre: form.get('Nombre')?.value,
          primerApellido: form.get('PrimerApellido')?.value,
          puestoLaboral: form.get('PuestoLaboral')?.value,
          segundoApellido: form.get('SegundoApellido')?.value,
          imagen: this.imagenBanner ?? item.usuario.imagen,
          imagenPerfil: this.imagenPerfil ?? item.usuario.imagenPerfil,
        };
        
        return of(dato);
      })
    );
  }

  guardarDatos(datos: usuario){
    this.apiService.actualizarUsuario(datos).subscribe((resp) => {
      if(!resp.hayError){
        this.mostrarMensaje(resp.mensaje, 'alert alert-success');
      }else{
        this.mostrarMensaje(resp.mensaje, 'alert alert-danger');
      }
      
    }) 
  }

  obtenerImagenBanner(event:any){
    let imagen = event.target.files;
    let fileReader = new FileReader();
    let nombreImg = this.formulario.get('Id')?.value + "-Banner"
    fileReader.readAsDataURL(imagen[0]);
    fileReader.onloadend = () => {
      this.storage.subirImagen(this.formulario.get('Id')?.value, nombreImg, fileReader.result).then((item) => {
        this.imagenBanner = item;
      });
    }
  }

  obtenerImagenPerfil(event:any){
    let imagen = event.target.files;
    let fileReader = new FileReader();
    let nombreImg = this.formulario.get('Id')?.value + "-Perfil"
    fileReader.readAsDataURL(imagen[0]);
    fileReader.onloadend = () => {
      this.storage.subirImagen(this.formulario.get('Id')?.value, nombreImg, fileReader.result).then((item) => {
       this.imagenPerfil = item;
      });
    }
  }
  ngOnInit(): void {
    this.llenarFormulario();
  }
}
