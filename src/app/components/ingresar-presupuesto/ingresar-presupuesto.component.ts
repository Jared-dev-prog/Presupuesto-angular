import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css'],
})
export class IngresarPresupuestoComponent {
  cantidad: number = 0;
  presupuestoInvalido: boolean = false;

  constructor(
    private _presupuestoServie: PresupuestoService,
    private router: Router
  ) {}

  public crearPresupuesto(): void {
    if (this.cantidad <= 0) {
      this.presupuestoInvalido = true;
      return;
    }
    this.presupuestoInvalido = false;
    this._presupuestoServie.presupuesto = this.cantidad;
    this.router.navigate(['/gastos']);
  }
}
