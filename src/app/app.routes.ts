import { Routes } from '@angular/router';
import { AppiconsComponent } from './appicons/appicons.component';
import { LoginComponent } from './login/login.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authguardGuard } from './shared/authguard.guard';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegistraionComponent},
    {path:'dashboard',component:DashboardComponent,canActivate: [authguardGuard]},
];
