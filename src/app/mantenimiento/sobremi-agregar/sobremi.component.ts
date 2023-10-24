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
  dato: any;
  mensajeSalida = '';
  claseSalida = '';
  constructor(private data: IndexMantenimientoComponent, private route: ActivatedRoute,
    private api: ApiServiceService) { }

  ngOnInit(): void {
    this.data.usuario$.subscribe((item)=>{
      this.dato = item;
    });
  }

  construirObjetoInsertar(form: FormGroup): sobreMi {
    const data: sobreMi = {
      id: '',
      id_Usuario: this.dato.usuario.id,
      descripcion: form.get('Descripcion')?.value,
      posicion: (this.dato.sobreMi.length + 1)
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
      } else{
        //manejar respuesta incorrecta
        this.mostrarMensaje(resp.mensaje, 'alert alert-danger');
      }
    });
  }
}
