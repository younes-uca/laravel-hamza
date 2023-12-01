import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SiteImageAdminService} from 'src/app/controller/service/admin/site/SiteImageAdmin.service';
import {SiteImageDto} from 'src/app/controller/model/site/SiteImage.model';
import {SiteImageCriteria} from 'src/app/controller/criteria/site/SiteImageCriteria.model';

import {SiteDto} from 'src/app/controller/model/site/Site.model';
import {SiteAdminService} from 'src/app/controller/service/admin/site/SiteAdmin.service';
@Component({
  selector: 'app-site-image-view-admin',
  templateUrl: './site-image-view-admin.component.html'
})
export class SiteImageViewAdminComponent extends AbstractViewController<SiteImageDto, SiteImageCriteria, SiteImageAdminService> implements OnInit {


    constructor(private siteImageService: SiteImageAdminService, private siteService: SiteAdminService){
        super(siteImageService);
    }

    ngOnInit(): void {
    }


    get site(): SiteDto {
       return this.siteService.item;
    }
    set site(value: SiteDto) {
        this.siteService.item = value;
    }
    get sites(): Array<SiteDto> {
       return this.siteService.items;
    }
    set sites(value: Array<SiteDto>) {
        this.siteService.items = value;
    }


}
