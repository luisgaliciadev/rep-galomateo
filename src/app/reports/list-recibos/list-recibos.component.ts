import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalomateoService } from 'src/app/services/galomateo/galomateo.service';

declare function init_plugins();

@Component({
  selector: 'app-list-recibos',
  templateUrl: './list-recibos.component.html',
  styles: [
  ]
})
export class ListRecibosComponent implements OnInit {

  recibos;
  search;
  fDesde;
  fHasta

  constructor(
    public _route: ActivatedRoute,
    public _galomateoService: GalomateoService
  ) { }

  ngOnInit(): void {
    init_plugins();
    this._route.params.forEach((params: Params) => {
      this.search = params.search;
      this.fDesde = params.desde;
      this.fHasta = params.hasta;
      if (this.search === '0') {
        this.search = '';
      }
    });

    this.getRecibos();
  }

  getRecibos() {
    console.log(this.fDesde);
    console.log(this.fHasta);
    console.log(this.search);
    this._galomateoService.getRecibos(this.fDesde, this.fHasta, this.search).subscribe(
      (response: any) => {
        console.log(response);
        this.recibos = response.recibos;
      }
    );
  }

  activePrinter() {
    setTimeout(this.printer, 2000);
    // this._userService.closeReport();
  }

  printer() {
    window.print();
  }

  toPrint() {
    var contenido= document.getElementById('report').innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
    window.close();
  }

}
