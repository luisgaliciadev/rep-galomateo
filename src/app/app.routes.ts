import { Routes, RouterModule, CanActivate } from '@angular/router';

// Componets
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { ListUsersComponent } from './reports/list-users/list-users.component';
import { AdminGuard } from './services/guards/admin.guard';
import { ReportGuard } from './services/guards/report.guard';
import { ListRecibosComponent } from './reports/list-recibos/list-recibos.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, data: {titulo: 'Login'}},
    { path: 'register', component: RegisterComponent, data: {titulo: 'Registro'}},

    // Reports 
    { path: 'listusers/:search',canActivate: [AdminGuard, ReportGuard], component: ListUsersComponent, data: {titulo: 'Listado de Usuarios'}},
    { path: 'listrecibos/:desde/:hasta/:search',canActivate: [], component: ListRecibosComponent, data: {titulo: 'Listado de Recibos'}},
 
    {
        path: '',
        component: PagesComponent,
        canActivate: [],
       loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );