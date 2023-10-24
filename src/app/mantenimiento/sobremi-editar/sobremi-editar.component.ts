import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IndexMantenimientoComponent } from '../index/index.component';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api.service.service';

@Component({
  selector: 'app-sobremi-editar',
  templateUrl: './sobremi-editar.component.html',
  styleUrls: ['./sobremi-editar.component.scss']
})
export class SobremiEditarComponent {
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

}
