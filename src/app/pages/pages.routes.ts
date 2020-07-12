import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SearchComponent } from './search/search.component';

// Guards
// import { AdminGuard } from '../services/guards/admin.guard';
// import { RenewTokenGuard } from '../services/guards/renew-token.guard';
// import { UserGuard } from '../services/guards/user.guard';

// Components SERVAL

// import { ModulesComponent } from './modules/modules.component';
// import { UpdateModuleComponent } from './update-module/update-module.component';
// import { RolesUserComponent } from './roles-user/roles-user.component';
// import { UsersComponent } from './users/users.component';
// import { AddUsersComponent } from './add-users/add-users.component';
// import { PermissionsComponent } from './permissions/permissions.component';
import { HomeComponent } from './home/home.component';
// import { RegistroVasComponent } from './registro-vas/registro-vas.component';
import { ReportesComponent } from './reportes/reportes.component';

const pagesRoutes: Routes = [
   // {
        // path: '',
        // component: PagesComponent,
        // canActivate: [LoginGuardGuard],
        // children: [
            { path: 'home', component: HomeComponent, canActivate: [],  data: {titulo: 'Inicio'}},
           
            { path: 'account-settigns', component: AccountSettingsComponent, canActivate: [], data: {titulo: 'Ajustes'}},
            // { path: 'profile', component: ProfileComponent, canActivate: [RenewTokenGuard], data: {titulo: 'Perfil de Usuario'}},
            // { path: 'search/:termino', component: SearchComponent, canActivate: [RenewTokenGuard], data: {titulo: 'Buscador'}},

            // Pages      
            {path: 'dashboard', component: DashboardComponent, canActivate: [], data: {titulo: 'Dashboard'}}, 
            {path: 'reportes', component: ReportesComponent, canActivate: [], data: {titulo: 'Reportes'}}, 
            
            // Matenimientos sistema
            // {path: 'modules', component: ModulesComponent, canActivate: [AdminGuard, RenewTokenGuard, UserGuard], data: {titulo: 'Administración de Modulos'}},
            // {path: 'module/:id', component: UpdateModuleComponent, canActivate: [AdminGuard, RenewTokenGuard], data: {titulo: 'Modificar de Modulo'}},
            // {path: 'roles', component: RolesUserComponent, canActivate: [AdminGuard, RenewTokenGuard], data: {titulo: 'Roles de Usuario'}},
            // {path: 'users', component: UsersComponent, canActivate: [AdminGuard, RenewTokenGuard], data: {titulo: 'Administración de Usuario'}},
            // {path: 'user/:id', component: AddUsersComponent, canActivate: [AdminGuard, RenewTokenGuard], data: {titulo: 'Administración de Usuario'}},
            // {path: 'permissions', component: PermissionsComponent, canActivate: [AdminGuard, RenewTokenGuard], data: {titulo: 'Permisología'}},

            // Predeterminado
            { path: '', redirectTo: '/home', pathMatch: 'full'},
       // ]
   // }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);