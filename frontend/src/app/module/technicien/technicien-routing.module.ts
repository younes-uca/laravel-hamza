
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginTechnicienComponent } from './login-technicien/login-technicien.component';
import { RegisterTechnicienComponent } from './register-technicien/register-technicien.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginTechnicienComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterTechnicienComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class TechnicienRoutingModule { }
