import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css'],
})
export class ListarGastoComponent {
  presupuesto: number = 0;
  restante: number = 0;
  listaGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;

    this._presupuestoService.getGastos().subscribe((data) => {
      this.restante = this.restante - data.cantidad;
      this.listaGastos.push(data);
    });
  }
}
