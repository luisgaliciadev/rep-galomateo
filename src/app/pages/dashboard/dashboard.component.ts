import { Component, OnInit } from '@angular/core';
import { GalomateoService } from 'src/app/services/galomateo/galomateo.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

// declare function init_plugins();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})

export class DashboardComponent implements OnInit {

  desde;
  hasta;
  date = new Date();
  mes;
  dia;
  loading = true;
  dataGrafico;
  dataGraficoMot;
  dataGraficoImporte;
  dataGraficoImporteMot;
  tipoDashboard = 1;

 
  constructor(
    public _galomateoService: GalomateoService
  ) { }

  ngOnInit() {
    this.mes = this.date.getMonth() + 1;
    this.dia = this.date.getDate();

    if (this.mes < 10) {
      this.mes = 0 + this.mes.toString(); 
    }

    if (this.dia < 10) {
      this.dia = 0 + this.dia.toString(); 
    }

    this.desde = this.date.getFullYear() + '-' + this.mes + '-' + this.dia;
    this.hasta = this.date.getFullYear() + '-' + this.mes + '-' + this.dia;

    this.getDashboard(this.tipoDashboard);
    
  }

  getDashboard(tipoDashboard) {
    if (tipoDashboard == 1) {
      this.getRecibosCom(this.desde, this.hasta);
    }

    if (tipoDashboard == 2) {
      this.getRecibosMot(this.desde, this.hasta);
    }

    if (tipoDashboard == 3) {
      this.getRecibosImporte(this.desde, this.hasta);
    }

    if (tipoDashboard == 4) {
      this.getRecibosImporteMot(this.desde, this.hasta);
    }

  }

  getRecibosCom(desde, hasta) {
    this.loading = true;
    let Data;    
    let data: any = [];   
    let labels: any = [];
    let options: any = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          font: {
            size: 12,
          }
        }
      }
    };
    let plugins: any = [pluginDataLabels];
    let legends = true;
    let type = 'bar';
    let leyenda = 'Cantidad de Recibos por Compañia';

    this._galomateoService.getCantidadRecibos(desde, hasta).subscribe(
      (response: any) => {

        response.recibos.forEach(function (recibo) {   
            labels.push(recibo.compania);
            data.push(recibo.cantidad);
        });

        Data = {
          data,
          label: 'Cantidad de Recibos'
        };

        this.dataGrafico = {
          Data: [Data],
          labels,
          options,
          plugins,
          legends,
          type,
          leyenda
        };
        this.loading = false;
      }
    );
  }

  getRecibosMot(desde, hasta) {
    this.loading = true;
    let Data;    
    let data: any = [];   
    let labels: any = [];
    let colors;
    let options: any = {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          font: {
            size: 12,
          }
        }
      }
    };
    let plugins: any = [pluginDataLabels];
    let legends = true;
    let type = 'polarArea';
    let leyenda = 'Cantidad de Recibos por Motivo';

    this._galomateoService.getCantidadRecibosMot(desde, hasta).subscribe(
      (response: any) => {

        response.recibos.forEach(function (recibo) {   
            labels.push(recibo.motivo);
            data.push(recibo.cantidad);
        });

        Data = {
          data,
          label: 'Cantidad de Recibos'
        };

        this.dataGraficoMot = {
          labels,
          data,
          type,
          legends,
          leyenda
        };
        // this.dataGraficoMot = {
        //   Data: [Data],
        //   labels,
        //   colors,
        //   options,
        //   plugins,
        //   legends,
        //   type,
        //   leyenda
        // };
        this.loading = false;
      }
    );
  }

  getRecibosImporte(desde, hasta) {
    this.loading = true;
    let Data;    
    let data: any = [];   
    let labels: any = [];
    let options: any = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          font: {
            size: 12,
          }
        }
      }
    };
    let plugins: any = [pluginDataLabels];
    let legends = true;
    let type = 'bar';
    let leyenda = 'Importe de Recibos por Compañia';

    this._galomateoService.getImporteRecibos(desde, hasta).subscribe(
      (response: any) => {
        response.recibos.forEach(function (recibo) {   
            labels.push(recibo.compania);
            data.push(recibo.importe);
        });

        Data = {
          data,
          label: 'Importe'
        };

        this.dataGraficoImporte = {
          Data: [Data],
          labels,
          options,
          plugins,
          legends,
          type,
          leyenda
        };
        this.loading = false;
      }
    );
  }

  getRecibosImporteMot(desde, hasta) {
    this.loading = true;
    let Data;    
    let data: any = [];   
    let labels: any = [];
    let colors;
    let options: any = {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          font: {
            size: 12,
          }
        }
      }
    };
    let plugins: any = [pluginDataLabels];
    let legends = true;
    let type = 'polarArea';
    let leyenda = 'Importe de Recibos por Motivo';

    this._galomateoService.getImporteRecibosMot(desde, hasta).subscribe(
      (response: any) => {

        response.recibos.forEach(function (recibo) {   
            labels.push(recibo.motivo);
            data.push(recibo.importe);
        });

        Data = {
          data,
          label: 'Importe'
        };

        this.dataGraficoImporteMot = {
          labels,
          data,
          type,
          legends,
          leyenda
        };
        // this.dataGraficoMot = {
        //   Data: [Data],
        //   labels,
        //   colors,
        //   options,
        //   plugins,
        //   legends,
        //   type,
        //   leyenda
        // };
        this.loading = false;
      }
    );
  }

}
