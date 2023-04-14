import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingresar-presupuesto',
    pathMatch: 'full',
  },
  {
    path: 'ingresar-presupuesto',
    component: IngresarPresupuestoComponent,
  },
  {
    path: 'gastos',
    component: GastosComponent,
  },
  {
    path: '**',
    redirectTo: 'ingresar-presupuesto',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
