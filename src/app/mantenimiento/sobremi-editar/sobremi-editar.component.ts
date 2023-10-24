import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IndexMantenimientoComponent } from '../index/index.component';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';
import { sobreMi } from 'src/app/models/sobreMi.model';

@Component({
  selector: 'app-sobremi-editar',
  templateUrl: './sobremi-editar.component.html',
  styleUrls: ['./sobremi-editar.component.scss']
})
export class SobremiEditarComponent implements OnInit{
  formulario: FormGroup = new FormGroup({
    Descripcion: new FormControl('', [Validators.required]),
  });
  dato: any;
  mensajeSalida = '';
  claseSalida = '';
constructor(private data: IndexMantenimientoComponent, private route: ActivatedRoute,
  private api: ApiServiceService){}
  onSumit() {
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parametro => {
      this.data.dataSobreMi.subscribe((item)=>{
        item.forEach((element: sobreMi )=> {
          if(element.id === parametro.get("id")){
            this.formulario.get('Descripcion')?.setValue(element.descripcion);
          }
        });
      });
    });
  }
}
