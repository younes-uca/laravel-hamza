import {Component, OnInit} from '@angular/core';
import {SiteAdminService} from 'src/app/controller/service/admin/site/SiteAdmin.service';
import {SiteDto} from 'src/app/controller/model/site/Site.model';
import {SiteCriteria} from 'src/app/controller/criteria/site/SiteCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ModeAccesDto} from 'src/app/controller/model/site/ModeAcces.model';
import {ModeAccesAdminService} from 'src/app/controller/service/admin/site/ModeAccesAdmin.service';
import {TechnicienDto} from 'src/app/controller/model/collaborateur/Technicien.model';
import {TechnicienAdminService} from 'src/app/controller/service/admin/collaborateur/TechnicienAdmin.service';
import {SiteImageDto} from 'src/app/controller/model/site/SiteImage.model';
import {SiteImageAdminService} from 'src/app/controller/service/admin/site/SiteImageAdmin.service';


@Component({
  selector: 'app-site-list-admin',
  templateUrl: './site-list-admin.component.html'
})
export class SiteListAdminComponent extends AbstractListController<SiteDto, SiteCriteria, SiteAdminService>  implements OnInit {

    fileName = 'Site';

    techniciens: Array<TechnicienDto>;
    modeAccess: Array<ModeAccesDto>;


    constructor( private siteService: SiteAdminService  , private modeAccesService: ModeAccesAdminService, private technicienService: TechnicienAdminService, private siteImageService: SiteImageAdminService) {
        super(siteService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadTechnicien();
        this.loadModeAcces();
    }


    public initCol() {
        this.cols = [
            {field: 'g2r', header: 'G2r'},
            {field: 'nom', header: 'Nom'},
            {field: 'technicien?.email', header: 'Technicien'},
            {field: 'adresse', header: 'Adresse'},
            {field: 'modeAcces?.libelle', header: 'Mode acces'},
        ];
    }


    public async loadTechnicien(){
       this.technicienService.findAllOptimized().subscribe(techniciens => this.techniciens = techniciens, error => console.log(error))
    }
    public async loadModeAcces(){
       this.modeAccesService.findAllOptimized().subscribe(modeAccess => this.modeAccess = modeAccess, error => console.log(error))
    }

	public initDuplicate(res: SiteDto) {
        if (res.siteImages != null) {
             res.siteImages.forEach(d => { d.site = null; d.id = null; });
        }
	}


   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'G2r': e.g2r ,
                 'Nom': e.nom ,
                'Technicien': e.technicien?.email ,
                 'Adresse': e.adresse ,
                 'Commentaire': e.commentaire ,
                'Mode acces': e.modeAcces?.libelle ,
            }
        });

        this.criteriaData = [{
            'G2r': this.criteria.g2r ? this.criteria.g2r : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
        //'Technicien': this.criteria.technicien?.email ? this.criteria.technicien?.email : environment.emptyForExport ,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport ,
            'Commentaire': this.criteria.commentaire ? this.criteria.commentaire : environment.emptyForExport ,
        //'Mode acces': this.criteria.modeAcces?.libelle ? this.criteria.modeAcces?.libelle : environment.emptyForExport ,
        }];
      }
}
