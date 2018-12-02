import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Miembro } from '../../interfaces/miembro.interface';
import { MiembrosService } from '../../services/miembros.service';

@Component({
  selector: 'app-miembro',
  templateUrl: './miembro.component.html',
  styles: []
})

export class MiembroComponent implements OnInit {
  public miembro: Miembro = {
    nombre: '',
    observaciones: '',
    tipo: 'Colaborador'
  };

  nuevo = false;
  id: string;

  constructor(private _miembrosService: MiembrosService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        if (this.id !== 'nuevo') {
          this._miembrosService.getMiembro(this.id)
            .subscribe(miembro => this.miembro = miembro);
        }
      });
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.miembro);
    if (this.id === 'nuevo') {
      // insertando
      this._miembrosService.nuevoMiembro(this.miembro)
        .subscribe(data => {
          this.router.navigate(['/miembro', data.name]);
        },
          error => console.error(error));
    } else {
      // actualizando
      this._miembrosService.actualizarMiembro(this.miembro, this.id)
        .subscribe(data => {
          console.log(data);
        },
          error => console.error(error));
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/miembro', 'nuevo']);
    forma.reset({
      casa: 'Colaborador'
    });
  }

}
