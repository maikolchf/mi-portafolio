import { Component, OnInit } from '@angular/core';
import { IndexMantenimientoComponent } from '../index/index.component';
import { ActivatedRoute } from '@angular/router';
import { sobreMi } from 'src/app/models/sobreMi.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    Descripcion: new FormControl('', [Validators.required]),

  });
  dato: any;
  constructor(private data: IndexMantenimientoComponent, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(parametro => {
      let id = parametro.get('id')
      this.data.usuario$.subscribe((item) => {
        if (item) {
          if (item.sobreMi) {
            this.dato = item.sobreMi.find((elemento: sobreMi) => elemento.id === id);
            //crear metodo para llenar los campos en formulario
            this.llenarFormulario(this.dato);
          }
        }
      })
    });
  }

  llenarFormulario(dato: sobreMi) {
    this.formulario.get('Descripcion')?.setValue(dato.descripcion);
  }

  construirObjetoInsertar(form: FormGroup): sobreMi {
    const data: sobreMi = {
      id: this.dato.id,
      id_Usuario: this.dato.id_Usuario,
      descripcion: form.get('Descripcion')?.value,
      posicion: this.dato.posicion
    };
    return data;
  }

  onSumit() {
    let registro = this.construirObjetoInsertar(this.formulario);
    console.log(registro);
  }
}
