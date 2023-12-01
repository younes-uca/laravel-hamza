import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ModeAccesAdminService} from 'src/app/controller/service/admin/site/ModeAccesAdmin.service';
import {ModeAccesDto} from 'src/app/controller/model/site/ModeAcces.model';
import {ModeAccesCriteria} from 'src/app/controller/criteria/site/ModeAccesCriteria.model';

@Component({
  selector: 'app-mode-acces-view-admin',
  templateUrl: './mode-acces-view-admin.component.html'
})
export class ModeAccesViewAdminComponent extends AbstractViewController<ModeAccesDto, ModeAccesCriteria, ModeAccesAdminService> implements OnInit {


    constructor(private modeAccesService: ModeAccesAdminService){
        super(modeAccesService);
    }

    ngOnInit(): void {
    }




}
