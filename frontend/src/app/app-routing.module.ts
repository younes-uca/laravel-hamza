import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppMainComponent} from 'src/app/template/app.main.component';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';
import { AccessDeniedComponent } from 'src/app/template/access-denied/access-denied.component';
import {HomeComponent} from 'src/app/home/home.component';

import {LoginAdminComponent} from 'src/app/module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from 'src/app/module/admin/register-admin/register-admin.component';
import {LoginTechnicienComponent} from 'src/app/module/technicien/login-technicien/login-technicien.component';
import {RegisterTechnicienComponent} from 'src/app/module/technicien/register-technicien/register-technicien.component';
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
            { path: '', component: HomeComponent },
            {path: 'admin/login', component: LoginAdminComponent },
            {path: 'admin/register', component: RegisterAdminComponent },
            {path: 'technicien/login', component: LoginTechnicienComponent },
            {path: 'technicien/register', component: RegisterTechnicienComponent },
            {
            path: 'app', // '\'' + root + '\'',
            component: AppMainComponent,
            children: [
                {
                    path: 'admin',
                    loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'technicien',
                    loadChildren: () => import( './module/technicien/technicien-routing.module').then(x => x.TechnicienRoutingModule),
                    canActivate: [AuthGuard],
                },
                    { path: 'denied', component: AccessDeniedComponent },
                ],
                canActivate: [AuthGuard]
                },
            ],
                { scrollPositionRestoration: 'enabled' }
            ),
        ],
    exports: [RouterModule],
    })
export class AppRoutingModule { }
