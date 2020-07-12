import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalomateoService {
  URL: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.URL = URL_SERVICES;
  }

  // Get Recibos
  getRecibos(desde, hasta, search) {

    if (search === '') {
      return this._http.get(this.URL + '/app/recibos/' + desde + '/' + hasta)
      .pipe(map((res: any) => {  
        return res;
      }));
    } else {
      return this._http.get(this.URL + '/app/reccompania/' + desde + '/' + hasta + '/' + search)
      .pipe(map((res: any) => {
        return res;
      }));
    }
   
  }
  // Fin Get Recibos

  // Get Cantidad de Recibos por empresa
  getCantidadRecibos(desde, hasta) {

    return this._http.get(this.URL + '/app/cantidad/' + desde + '/' + hasta)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  // Fin Cantidad de Recibos por empresa

  // Get Cantidad de Recibos por motivo
  getCantidadRecibosMot(desde, hasta) {

    return this._http.get(this.URL + '/app/cantidadmot/' + desde + '/' + hasta)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  // Fin Cantidad de Recibos por empresa

  // Get Importe de Recibos por compañia
   getImporteRecibos(desde, hasta) {

    return this._http.get(this.URL + '/app/importe/' + desde + '/' + hasta)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  // Fin Get Importe de Recibos por compañia
  
  // Get Importe recibo por motivo
  getImporteRecibosMot(desde, hasta) {

    return this._http.get(this.URL + '/app/importemotivo/' + desde + '/' + hasta)
      .pipe(map((res: any) => {
        return res;
      }));
  }
  // Fin Get Importe recibo por motivo

  
}
