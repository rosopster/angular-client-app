import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ResumenComponent } from './components/resumen/resumen.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'ingreso', component: IngresoComponent },
  { path: 'resumen', component: ResumenComponent },
  { path: '**', redirectTo: 'ingreso' }, // Ruta para páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
