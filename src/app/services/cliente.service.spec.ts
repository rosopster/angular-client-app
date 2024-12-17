import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientes = [
    { tipoDocumento: 'C', numeroDocumento: '23445322', primerNombre: 'Jhenny', primerApellido: 'Pérez' },
    { tipoDocumento: 'P', numeroDocumento: '98765432', primerNombre: 'Ana', primerApellido: 'Gómez' },
  ];

  buscarCliente(tipoDocumento: string, numeroDocumento: string) {
    return this.clientes.find(
      (cliente) =>
        cliente.tipoDocumento === tipoDocumento && cliente.numeroDocumento === numeroDocumento
    );
  }
}
