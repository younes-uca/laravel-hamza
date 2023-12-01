
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ModeAccesListAdminComponent } from './mode-acces/list/mode-acces-list-admin.component';
import { SiteImageListAdminComponent } from './site-image/list/site-image-list-admin.component';
import { SiteListAdminComponent } from './site/list/site-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'mode-acces',
                            children: [
                                {
                                    path: 'list',
                                    component: ModeAccesListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'site-image',
                            children: [
                                {
                                    path: 'list',
                                    component: SiteImageListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'site',
                            children: [
                                {
                                    path: 'list',
                                    component: SiteListAdminComponent ,
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
export class SiteAdminRoutingModule { }
