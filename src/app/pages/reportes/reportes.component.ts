import { Component, OnInit } from '@angular/core';
import { GalomateoService } from 'src/app/services/galomateo/galomateo.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styles: [
  ]
})
export class ReportesComponent implements OnInit {
  recibos = []
  desde: number;
  hasta: number;
  loading = true;
  totalRegistros = 0;
  search: string;
  activeButton;
  fDesde: string;
  fHasta: string;
  date = new Date();
  mes;
  dia;

  constructor(
    public _galomateoService: GalomateoService
  ) { 
    this.search = '';

    this.mes = this.date.getMonth() + 1;
    this.dia = this.date.getDate();

    if (this.mes < 10) {
      this.mes = 0 + this.mes.toString(); 
    }

    if (this.dia < 10) {
      this.dia = 0 + this.dia.toString(); 
    }

    this.fDesde = this.date.getFullYear() + '-' + this.mes + '-' + this.dia;
    this.fHasta = this.date.getFullYear() + '-' + this.mes + '-' + this.dia;
  }

  ngOnInit(): void {
    this.getRecibos(this.fDesde, this.fHasta, this.search);
  }

  getRecibos(desde, hasta, search) {
    this.loading = true;
    this.search = search;
    this.activeButton = false;
    this._galomateoService.getRecibos(desde, hasta, search).subscribe(
      (response: any) => {
        this.recibos = response.recibos;
        this.totalRegistros = response.recibos.length;
        this.loading = false;
      }
    );
  }

  // Limpiar busqueda
  clear() {
    this.search = '';
    this.getRecibos(this.fDesde, this.fHasta, this.search);
  }

  // Activar o desactivar botones de reportes
  activeButtons() {
    if (this.search.length > 0) {
      this.activeButton = true;
    } else {
      this.activeButton = false;
      this.getRecibos(this.fDesde, this.fHasta, this.search);
    }
  }

  printer() {
    if (this.search === '') {
      window.open('#/listrecibos/' + this.fDesde + '/' + this.fHasta + '/' + '0', '0' , '_blank');
    } else {
      window.open('#/listrecibos/' + this.fDesde + '/' + this.fHasta + '/' + this.search, '0' , '_blank');
    }
    
  }


}
