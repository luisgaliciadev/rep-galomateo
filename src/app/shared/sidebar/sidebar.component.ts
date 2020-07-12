import { Component, OnInit } from '@angular/core';
import { SidebarService, UserService } from '../../services/service.index';
import { User } from 'src/app/models/user.model';

// declare function init_plugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})



export class SidebarComponent implements OnInit {

  public user: User;

  menu = [
    {"ID_MODULE":1,"ID_MODULE_SEC":0,"ORDEN":1,"FG_SUB_MENU":false,"DS_MODULE":"Inicio","URL":"/home","ID_TYPE_MENU":1,"ICON":"mdi mdi-home","ID_MODULE_MAIN":null},
    {"ID_MODULE":2,"ID_MODULE_SEC":0,"ORDEN":2,"FG_SUB_MENU":false,"DS_MODULE":"Dashboard","URL":"/dashboard","ID_TYPE_MENU":1,"ICON":"mdi mdi mdi-chart-areaspline","ID_MODULE_MAIN":null},
    {"ID_MODULE":3,"ID_MODULE_SEC":0,"ORDEN":3,"FG_SUB_MENU":false,"DS_MODULE":"Reportes","URL":"/reportes","ID_TYPE_MENU":1,"ICON":"mdi mdi mdi-chart-timeline","ID_MODULE_MAIN":null},
  ];

  constructor(
    // tslint:disable-next-line: variable-name
    public _sidebar: SidebarService,
    // tslint:disable-next-line: variable-name
    public _userService: UserService
    ) {

     }

  ngOnInit() {
    // console.log('sidebar componente');
    // init_plugins();
    this.user = this._userService.user;
    this._sidebar.loadMenu();

  }

  idModule(idModule) {

    // this._userService.ID_MODULE = 0;
    // console.log('inicio del sidebar: ' + this._userService.ID_MODULE);
    this._userService.idModule(idModule);
    // console.log('fin del sidebar: ' + this._userService.ID_MODULE);
    // console.log('valor sidebar' + idModule);
    // console.log('_userService' + this._userService.ID_MODULE);
  }



}
