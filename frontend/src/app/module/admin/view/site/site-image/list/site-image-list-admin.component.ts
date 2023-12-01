import {Component, OnInit} from '@angular/core';
import {SiteImageAdminService} from 'src/app/controller/service/admin/site/SiteImageAdmin.service';
import {SiteImageDto} from 'src/app/controller/model/site/SiteImage.model';
import {SiteImageCriteria} from 'src/app/controller/criteria/site/SiteImageCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {SiteDto} from 'src/app/controller/model/site/Site.model';
import {SiteAdminService} from 'src/app/controller/service/admin/site/SiteAdmin.service';


@Component({
  selector: 'app-site-image-list-admin',
  templateUrl: './site-image-list-admin.component.html'
})
export class SiteImageListAdminComponent extends AbstractListController<SiteImageDto, SiteImageCriteria, SiteImageAdminService>  implements OnInit {

    fileName = 'SiteImage';

    sites: Array<SiteDto>;


    constructor( private siteImageService: SiteImageAdminService  , private siteService: SiteAdminService) {
        super(siteImageService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadSite();
    }


    public initCol() {
        this.cols = [
            {field: 'site?.nom', header: 'Site'},
            {field: 'fileName', header: 'File name'},
            {field: 'filePath', header: 'File path'},
        ];
    }


    public async loadSite(){
       this.siteService.findAllOptimized().subscribe(sites => this.sites = sites, error => console.log(error))
    }



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Site': e.site?.nom ,
                 'File name': e.fileName ,
                 'File path': e.filePath ,
                 'Description': e.description ,
            }
        });

        this.criteriaData = [{
        //'Site': this.criteria.site?.nom ? this.criteria.site?.nom : environment.emptyForExport ,
            'File name': this.criteria.fileName ? this.criteria.fileName : environment.emptyForExport ,
            'File path': this.criteria.filePath ? this.criteria.filePath : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        }];
      }
}
