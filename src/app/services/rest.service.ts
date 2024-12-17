import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  API_URL:string = 'http://localhost:8090/api/clientes';

  constructor(private httpClient: HttpClient) { }

  getCliente(tipoDocumento: string, numeroDocumento: string): Observable<any>{
    return this.httpClient.get(this.API_URL + '?tipoDocumento=' + tipoDocumento + '&numeroDocumento=' + numeroDocumento);
  }
}
