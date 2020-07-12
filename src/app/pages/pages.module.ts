
// Main Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Modules
import { SharedModule } from '../shared/shaerd.module';
import { PAGES_ROUTES } from './pages.routes';

// Graphi
import { ChartsModule } from 'ng2-charts';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { UpdateModuleComponent } from './update-module/update-module.component';

// Components
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ModulesComponent } from './modules/modules.component';
import { GraphicsDoughnutComponent } from '../components/graphics-doughnut/graphics-doughnut.component';
import { RolesUserComponent } from './roles-user/roles-user.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { HomeComponent } from './home/home.component';
import { RegistroVasComponent } from './registro-vas/registro-vas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { GraphicsBarchartComponent } from '../components/graphics-barchart/graphics-barchart.component';
import { GraphicsPieComponent } from '../components/graphics-pie/graphics-pie.component';
import { GraphicsPolarComponent } from '../components/graphics-polar/graphics-polar.component';

@NgModule({
    declarations: [
        DashboardComponent,
        AccountSettingsComponent,
        ProfileComponent,
        SearchComponent,
        ModulesComponent,
        UpdateModuleComponent,
        RolesUserComponent,
        UsersComponent,
        AddUsersComponent,
        GraphicsDoughnutComponent,
        GraphicsBarchartComponent,
        GraphicsPieComponent,
        GraphicsPolarComponent,
        PermissionsComponent,
        HomeComponent,
        RegistroVasComponent,
        ReportesComponent
    ],
    exports: [
        // PagesComponent,
        // DashboardComponent,
        // ProgressComponent,
        // Graphics1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class PagesModule { }