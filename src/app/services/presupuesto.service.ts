import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  presupuesto: number = 0;
  restante: number = 0;

  constructor() {}

  agregarGasto(gasto: any): void {
    this.restante = this.restante - gasto.cantidad;
  }
}
