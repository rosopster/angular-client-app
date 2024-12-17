import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent implements OnInit {
  cliente: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const clienteData = sessionStorage.getItem('cliente');
    if (clienteData) {
      this.cliente = JSON.parse(clienteData);
    } else {
      this.router.navigate(['/']);
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
