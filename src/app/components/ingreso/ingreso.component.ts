import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { RestService } from '../../services/rest.service';
import { ClienteInterface } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent {
formatNumber($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  form: FormGroup;
  cliente!: ClienteInterface;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private restService: RestService
  ) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(11)],
      ],
    });
  }
  //Pruebas iniciales con cliente quemado
  buscar() {
    const { tipoDocumento, numeroDocumento } = this.form.value;
    const cliente = this.clienteService.buscarCliente(tipoDocumento, numeroDocumento);

    if (cliente) {
      sessionStorage.setItem('cliente', JSON.stringify(cliente));
      this.router.navigate(['/resumen']);
    } else {
      alert('Cliente no encontrado');
    }
  }

  buscarRest() {
    const numeroDocumentoControl = this.form.get('numeroDocumento');
    const numeroDocumento = numeroDocumentoControl?.value ? numeroDocumentoControl.value.replace(/\./g, '') : '';
    const tipoDocumentoControl = this.form.get('tipoDocumento');
    const tipoDocumento = tipoDocumentoControl?.value ? tipoDocumentoControl.value : '';
    this.restService.getCliente(tipoDocumento, numeroDocumento).subscribe(item => {
      this.cliente = item;

      if (this.cliente) {
        sessionStorage.setItem('cliente', JSON.stringify(this.cliente));
        this.router.navigate(['/resumen']);
      } else {
        alert('Cliente no encontrado');
      }
    },
    (ex) => {
      // Manejo de errores en caso de que la petición falle
      console.error('Error al obtener el cliente:', ex);
      alert(ex.error.message);
    });
  }

  formatNumeroDocumento(event: any): void {
    const control = this.form.get('numeroDocumento');
    if (control) {
      let value = control.value;

      // Elimina cualquier carácter que no sea numérico
      value = value.replace(/\D/g, '');

      // Trunca el valor a 11 caracteres
      value = value.slice(0, 11);

      // Aplica el formato con separadores de miles
      const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      // Actualiza el valor del campo en el formulario
      control.setValue(formattedValue, { emitEvent: false });
  }
    
}
}
