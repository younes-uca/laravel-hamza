import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ModeAccesAdminService} from 'src/app/controller/service/admin/site/ModeAccesAdmin.service';
import {ModeAccesDto} from 'src/app/controller/model/site/ModeAcces.model';
import {ModeAccesCriteria} from 'src/app/controller/criteria/site/ModeAccesCriteria.model';
@Component({
  selector: 'app-mode-acces-create-admin',
  templateUrl: './mode-acces-create-admin.component.html'
})
export class ModeAccesCreateAdminComponent extends AbstractCreateController<ModeAccesDto, ModeAccesCriteria, ModeAccesAdminService>  implements OnInit {



   private _validModeAccesLibelle = true;
   private _validModeAccesCode = true;

    constructor( private modeAccesService: ModeAccesAdminService ) {
        super(modeAccesService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
        this.validModeAccesLibelle = value;
        this.validModeAccesCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateModeAccesLibelle();
        this.validateModeAccesCode();
    }

    public validateModeAccesLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validModeAccesLibelle = false;
        } else {
            this.validModeAccesLibelle = true;
        }
    }
    public validateModeAccesCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validModeAccesCode = false;
        } else {
            this.validModeAccesCode = true;
        }
    }






    get validModeAccesLibelle(): boolean {
        return this._validModeAccesLibelle;
    }

    set validModeAccesLibelle(value: boolean) {
         this._validModeAccesLibelle = value;
    }
    get validModeAccesCode(): boolean {
        return this._validModeAccesCode;
    }

    set validModeAccesCode(value: boolean) {
         this._validModeAccesCode = value;
    }



}
