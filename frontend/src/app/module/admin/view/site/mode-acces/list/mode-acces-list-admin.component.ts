import {Component, OnInit} from '@angular/core';
import {ModeAccesAdminService} from 'src/app/controller/service/admin/site/ModeAccesAdmin.service';
import {ModeAccesDto} from 'src/app/controller/model/site/ModeAcces.model';
import {ModeAccesCriteria} from 'src/app/controller/criteria/site/ModeAccesCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-mode-acces-list-admin',
  templateUrl: './mode-acces-list-admin.component.html'
})
export class ModeAccesListAdminComponent extends AbstractListController<ModeAccesDto, ModeAccesCriteria, ModeAccesAdminService>  implements OnInit {

    fileName = 'ModeAcces';



    constructor( private modeAccesService: ModeAccesAdminService  ) {
        super(modeAccesService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }





   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
