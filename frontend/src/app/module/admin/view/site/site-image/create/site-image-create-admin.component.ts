import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SiteImageAdminService} from 'src/app/controller/service/admin/site/SiteImageAdmin.service';
import {SiteImageDto} from 'src/app/controller/model/site/SiteImage.model';
import {SiteImageCriteria} from 'src/app/controller/criteria/site/SiteImageCriteria.model';
import {SiteDto} from 'src/app/controller/model/site/Site.model';
import {SiteAdminService} from 'src/app/controller/service/admin/site/SiteAdmin.service';
@Component({
  selector: 'app-site-image-create-admin',
  templateUrl: './site-image-create-admin.component.html'
})
export class SiteImageCreateAdminComponent extends AbstractCreateController<SiteImageDto, SiteImageCriteria, SiteImageAdminService>  implements OnInit {



   private _validSiteImageFileName = true;
   private _validSiteImageFilePath = true;
    private _validSiteG2r = true;
    private _validSiteNom = true;

    constructor( private siteImageService: SiteImageAdminService , private siteService: SiteAdminService) {
        super(siteImageService);
    }

    ngOnInit(): void {
        this.site = new SiteDto();
        this.siteService.findAll().subscribe((data) => this.sites = data);
    }





    public setValidation(value: boolean){
        this.validSiteImageFileName = value;
        this.validSiteImageFilePath = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSiteImageFileName();
        this.validateSiteImageFilePath();
    }

    public validateSiteImageFileName(){
        if (this.stringUtilService.isEmpty(this.item.fileName)) {
        this.errorMessages.push('File name non valide');
        this.validSiteImageFileName = false;
        } else {
            this.validSiteImageFileName = true;
        }
    }
    public validateSiteImageFilePath(){
        if (this.stringUtilService.isEmpty(this.item.filePath)) {
        this.errorMessages.push('File path non valide');
        this.validSiteImageFilePath = false;
        } else {
            this.validSiteImageFilePath = true;
        }
    }


    public async openCreateSite(site: string) {
    const isPermistted = await this.roleService.isPermitted('Site', 'add');
    if(isPermistted) {
         this.site = new SiteDto();
         this.createSiteDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get createSiteDialog(): boolean {
       return this.siteService.createDialog;
    }
    set createSiteDialog(value: boolean) {
        this.siteService.createDialog= value;
    }



    get validSiteImageFileName(): boolean {
        return this._validSiteImageFileName;
    }

    set validSiteImageFileName(value: boolean) {
         this._validSiteImageFileName = value;
    }
    get validSiteImageFilePath(): boolean {
        return this._validSiteImageFilePath;
    }

    set validSiteImageFilePath(value: boolean) {
         this._validSiteImageFilePath = value;
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


}
