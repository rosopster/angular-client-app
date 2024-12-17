import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { ResumenComponent } from './components/resumen/resumen.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
    ResumenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule esté aquí
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
    