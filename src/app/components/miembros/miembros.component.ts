import { Component, OnInit } from '@angular/core';
import { MiembrosService } from '../../services/miembros.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styles: []
})

export class MiembrosComponent implements OnInit {

  miembros: any[] = [];
  loading = true;


  constructor(private _miembrosService: MiembrosService) {
    this._miembrosService.getMiembros()
      .subscribe(data => {
        this.miembros = data;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  borraMiembro(key$: string) {
    this._miembrosService.borrarMiembro(key$)
      .subscribe(respuesta => {
        if (respuesta) {
          console.error(respuesta);
        } else {
          // todo bien
          delete this.miembros[key$];
        }
      });
  }

}
