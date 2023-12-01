import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SiteAdminService} from 'src/app/controller/service/admin/site/SiteAdmin.service';
import {SiteDto} from 'src/app/controller/model/site/Site.model';
import {SiteCriteria} from 'src/app/controller/criteria/site/SiteCriteria.model';

import {ModeAccesDto} from 'src/app/controller/model/site/ModeAcces.model';
import {ModeAccesAdminService} from 'src/app/controller/service/admin/site/ModeAccesAdmin.service';
import {TechnicienDto} from 'src/app/controller/model/collaborateur/Technicien.model';
import {TechnicienAdminService} from 'src/app/controller/service/admin/collaborateur/TechnicienAdmin.service';
import {SiteImageDto} from 'src/app/controller/model/site/SiteImage.model';
import {SiteImageAdminService} from 'src/app/controller/service/admin/site/SiteImageAdmin.service';
@Component({
  selector: 'app-site-view-admin',
  templateUrl: './site-view-admin.component.html'
})
export class SiteViewAdminComponent extends AbstractViewController<SiteDto, SiteCriteria, SiteAdminService> implements OnInit {

    siteImages = new SiteImageDto();
    siteImagess: Array<SiteImageDto> = [];

    constructor(private siteService: SiteAdminService, private modeAccesService: ModeAccesAdminService, private technicienService: TechnicienAdminService, private siteImageService: SiteImageAdminService){
        super(siteService);
    }

    ngOnInit(): void {
    }


    get technicien(): TechnicienDto {
       return this.technicienService.item;
    }
    set technicien(value: TechnicienDto) {
        this.technicienService.item = value;
    }
    get techniciens(): Array<TechnicienDto> {
       return this.technicienService.items;
    }
    set techniciens(value: Array<TechnicienDto>) {
        this.technicienService.items = value;
    }
    get modeAcces(): ModeAccesDto {
       return this.modeAccesService.item;
    }
    set modeAcces(value: ModeAccesDto) {
        this.modeAccesService.item = value;
    }
    get modeAccess(): Array<ModeAccesDto> {
       return this.modeAccesService.items;
    }
    set modeAccess(value: Array<ModeAccesDto>) {
        this.modeAccesService.items = value;
    }


}
