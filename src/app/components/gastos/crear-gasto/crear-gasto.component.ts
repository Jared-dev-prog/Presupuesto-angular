import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-crear-gasto',
  templateUrl: './crear-gasto.component.html',
  styleUrls: ['./crear-gasto.component.css'],
})
export class CrearGastoComponent {
  cantidad: number = 0;
  nombreGasto: string = '';
  gastoValido: boolean = false;
  alerta: string = '';

  constructor(private _presupuestoServie: PresupuestoService) {}

  agregarGasto() {
    if (this.cantidad > this._presupuestoServie.restante) {
      this.gastoValido = true;
      this.alerta = 'Cantidad ingresada es mayor al restante.';
      return;
    }

    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.gastoValido = true;
      this.alerta = 'Nombre gasto o cantidad incorrectos.';
      return;
    }

    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad,
    };

    this._presupuestoServie.agregarGasto(GASTO);

    this.gastoValido = false;
  }
}
