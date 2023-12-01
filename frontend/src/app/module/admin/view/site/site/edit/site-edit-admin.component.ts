import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

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
  selector: 'app-site-edit-admin',
  templateUrl: './site-edit-admin.component.html'
})
export class SiteEditAdminComponent extends AbstractEditController<SiteDto, SiteCriteria, SiteAdminService>   implements OnInit {

    private _siteImagesElement = new SiteImageDto();

    private _validSiteG2r = true;
    private _validSiteNom = true;

    private _validTechnicienNom = true;
    private _validTechnicienPrenom = true;
    private _validTechnicienEmail = true;
    private _validModeAccesLibelle = true;
    private _validModeAccesCode = true;
    private _validSiteImagesFileName = true;
    private _validSiteImagesFilePath = true;



    constructor( private siteService: SiteAdminService , private modeAccesService: ModeAccesAdminService, private technicienService: TechnicienAdminService, private siteImageService: SiteImageAdminService) {
        super(siteService);
    }

    ngOnInit(): void {

        this.technicien = new TechnicienDto();
        this.technicienService.findAll().subscribe((data) => this.techniciens = data);
        this.modeAcces = new ModeAccesDto();
        this.modeAccesService.findAll().subscribe((data) => this.modeAccess = data);
    }


    public validateSiteImages(){
        this.errorMessages = new Array();
        this.validateSiteImagesFileName();
        this.validateSiteImagesFilePath();
    }
    public setValidation(value: boolean){
        this.validSiteG2r = value;
        this.validSiteNom = value;
        this.validSiteImagesFileName = value;
        this.validSiteImagesFilePath = value;
        }
   public addSiteImages() {
        if( this.item.siteImages == null )
            this.item.siteImages = new Array<SiteImageDto>();
       this.validateSiteImages();
       if (this.errorMessages.length === 0) {
            if(this.siteImagesElement.id == null){
                this.item.siteImages.push(this.siteImagesElement);
            }else{
                const index = this.item.siteImages.findIndex(e => e.id == this.siteImagesElement.id);
                this.item.siteImages[index] = this.siteImagesElement;
            }
          this.siteImagesElement = new SiteImageDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteSiteImages(p: SiteImageDto) {
        this.item.siteImages.forEach((element, index) => {
            if (element === p) { this.item.siteImages.splice(index, 1); }
        });
    }

    public editSiteImages(p: SiteImageDto) {
        this.siteImagesElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSiteG2r();
        this.validateSiteNom();
    }
    public validateSiteG2r(){
        if (this.stringUtilService.isEmpty(this.item.g2r)) {
            this.errorMessages.push('G2r non valide');
            this.validSiteG2r = false;
        } else {
            this.validSiteG2r = true;
        }
    }
    public validateSiteNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validSiteNom = false;
        } else {
            this.validSiteNom = true;
        }
    }


    private validateSiteImagesFileName(){
        if (this.siteImagesElement.fileName == null) {
        this.errorMessages.push('FileName de la siteImage est  invalide');
            this.validSiteImagesFileName = false;
        } else {
            this.validSiteImagesFileName = true;
        }
    }
    private validateSiteImagesFilePath(){
        if (this.siteImagesElement.filePath == null) {
        this.errorMessages.push('FilePath de la siteImage est  invalide');
            this.validSiteImagesFilePath = false;
        } else {
            this.validSiteImagesFilePath = true;
        }
    }

   public async openCreateModeAcces(modeAcces: string) {
        const isPermistted = await this.roleService.isPermitted('ModeAcces', 'edit');
        if (isPermistted) {
             this.modeAcces = new ModeAccesDto();
             this.createModeAccesDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
   get createTechnicienDialog(): boolean {
       return this.technicienService.createDialog;
   }
  set createTechnicienDialog(value: boolean) {
       this.technicienService.createDialog= value;
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
   get createModeAccesDialog(): boolean {
       return this.modeAccesService.createDialog;
   }
  set createModeAccesDialog(value: boolean) {
       this.modeAccesService.createDialog= value;
   }

    get siteImagesElement(): SiteImageDto {
        if( this._siteImagesElement == null )
            this._siteImagesElement = new SiteImageDto();
         return this._siteImagesElement;
    }

    set siteImagesElement(value: SiteImageDto) {
        this._siteImagesElement = value;
    }

    get validSiteG2r(): boolean {
        return this._validSiteG2r;
    }
    set validSiteG2r(value: boolean) {
        this._validSiteG2r = value;
    }
    get validSiteNom(): boolean {
        return this._validSiteNom;
    }
    set validSiteNom(value: boolean) {
        this._validSiteNom = value;
    }

    get validTechnicienNom(): boolean {
        return this._validTechnicienNom;
    }
    set validTechnicienNom(value: boolean) {
        this._validTechnicienNom = value;
    }
    get validTechnicienPrenom(): boolean {
        return this._validTechnicienPrenom;
    }
    set validTechnicienPrenom(value: boolean) {
        this._validTechnicienPrenom = value;
    }
    get validTechnicienEmail(): boolean {
        return this._validTechnicienEmail;
    }
    set validTechnicienEmail(value: boolean) {
        this._validTechnicienEmail = value;
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
    get validSiteImagesFileName(): boolean {
        return this._validSiteImagesFileName;
    }
    set validSiteImagesFileName(value: boolean) {
        this._validSiteImagesFileName = value;
    }
    get validSiteImagesFilePath(): boolean {
        return this._validSiteImagesFilePath;
    }
    set validSiteImagesFilePath(value: boolean) {
        this._validSiteImagesFilePath = value;
    }
}
