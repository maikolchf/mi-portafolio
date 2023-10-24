import { Component, OnInit } from '@angular/core';
import { IndexMantenimientoComponent } from '../index/index.component';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { usuario } from 'src/app/models/usuario.model'
import { sobreMi } from 'src/app/models/sobreMi.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatosCompartidosService } from 'src/app/services/datos-compartidos.service';

@Component({
  selector: 'app-sobremi-list',
  templateUrl: './sobremi-list.component.html',
  styleUrls: ['./sobremi-list.component.scss'],
  animations:[
    //se crea para poder hacer el efecto de que el mensaje se oculte con una animación
    trigger('ocultarMensaje',[
      state('void',style({opacity: 1})),
      transition(':leave',[animate('300ms', style({opacity:0}))]),
    ])
  ]
})
export class SobremiListComponent implements OnInit{
  sobreMi:any;
  filtro: usuario = {
    id: '',
    celular:'',
    contrasenna:'',
    correoElectronico:'',
    imagen:'',
    imagenPerfil:'',
    nombre:'',
    primerApellido:'',
    puestoLaboral:'',
    segundoApellido:''
  };
  mensajeSalida = '';
  claseSalida = '';
  tituloModal: string = "";
  spinnerMostrar = true;
  constructor(private data: IndexMantenimientoComponent, private apiService: ApiServiceService,
    private datosCompartidos: DatosCompartidosService){}

  ngOnInit(): void {
    this.obtenerDatos();

    this.datosCompartidos.getObtenerDatosSobreMi().subscribe((item => {
      if(item){
        this.obtenerDatos();
      }
    }));
  }

  obtenerDatos(){
    this.data.usuario$.subscribe(item => {
      if(item){
        this.filtro.id = item.usuario.id
        this.apiService.obtenerDatosSobreMi(this.filtro).subscribe((info) => {
            if(!info.hayError){
              this.sobreMi = info.objetoRespuesta
              this.data.dataSobreMi.next(info.objetoRespuesta);
              this.spinnerMostrar = false;
            }
        });
      }
    });
  }
  
  eliminarSobremi(id:string){
    let filtro: sobreMi ={
      id:id,
      descripcion:'',
      id_Usuario:'',
      posicion:0
    }
    this.apiService.eliminarRegistroSobreMi(filtro).subscribe((respuesta)=> {
      if(!respuesta.hayError){
        this.mostrarMensaje(respuesta.mensaje, 'alert alert-success');
      }else{
        this.mostrarMensaje(respuesta.mensaje, 'alert alert-danger');
      }
      this.obtenerDatos();
    });
  }

  mostrarMensaje(mensaje: string, clase: string){
    this.mensajeSalida = mensaje;
      this.claseSalida = clase;
      setTimeout(() => {
        this.mensajeSalida = ''
      }, 3000);
  }
  eventoBtnAgregar(){
    this.tituloModal= "Agregar información sobre mi";
  }
  eventoBtnEditar(){
    this.tituloModal= "Editar información sobre mi";
  }
}
