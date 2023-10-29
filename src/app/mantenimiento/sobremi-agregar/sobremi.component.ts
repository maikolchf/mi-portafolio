import { Component, OnInit } from '@angular/core';
import { IndexMantenimientoComponent } from '../index/index.component';
import { ActivatedRoute } from '@angular/router';
import { sobreMi } from 'src/app/models/sobreMi.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { respuesta } from 'src/app/models/respuesta.model';
import { usuario } from 'src/app/models/usuario.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatosCompartidosService } from 'src/app/services/datos-compartidos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss'],
  animations:[
    //se crea para poder hacer el efecto de que el mensaje se oculte con una animación
    trigger('ocultarMensaje',[
      state('void',style({opacity: 1})),
      transition(':leave',[animate('300ms', style({opacity:0}))]),
    ])
  ]
})
export class SobremiComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    Descripcion: new FormControl('', [Validators.required]),
  });
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
  dato: any;
  usuario: any;
  mensajeSalida = '';
  claseSalida = '';
  constructor(private data: IndexMantenimientoComponent, private route: ActivatedRoute,
    private api: ApiServiceService, private datosCompartidos: DatosCompartidosService,) { }

  ngOnInit(): void {
    this.data.usuario$.subscribe((item)=>{
      this.usuario = item.usuario;
      this.dato = item.sobreMi;
    });

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
        this.api.obtenerDatosSobreMi(this.filtro).subscribe((info) => {
            if(!info.hayError){
              this.dato = info.objetoRespuesta
            }
        });
      }
    });
  }
  
  construirObjetoInsertar(form: FormGroup): sobreMi {
    const valoresPosicion = this.dato.map((item:any) => item.posicion);
    const maximoPosicion = Math.max(...valoresPosicion);
    const data: sobreMi = {
      id: '',
      id_Usuario: this.usuario.id,
      descripcion: form.get('Descripcion')?.value,
      posicion: (maximoPosicion + 1)
    };
    return data;
  }

  mostrarMensaje(mensaje: string, clase: string){
    this.mensajeSalida = mensaje;
      this.claseSalida = clase;
      setTimeout(() => {
        this.mensajeSalida = ''
      }, 3000);
  }

  onSumit() {
    let registro = this.construirObjetoInsertar(this.formulario);
    this.api.insertarDatoSobreMi(registro).subscribe((resp: respuesta)=>{
      if(!resp.hayError){
        // manejar respuesta correcta
        this.mostrarMensaje(resp.mensaje, 'alert alert-success');
        this.datosCompartidos.setObtenerDatosSobreMi(true);
      } else{
        //manejar respuesta incorrecta
        this.mostrarMensaje(resp.mensaje, 'alert alert-danger');
      }
    });
  }
}
