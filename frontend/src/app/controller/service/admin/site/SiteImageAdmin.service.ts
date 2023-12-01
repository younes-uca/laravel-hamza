import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {SiteImageDto} from 'src/app/controller/model/site/SiteImage.model';
import {SiteImageCriteria} from 'src/app/controller/criteria/site/SiteImageCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SiteImageAdminService extends AbstractService<SiteImageDto, SiteImageCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/siteImage/');
    }

    public constrcutDto(): SiteImageDto {
        return new SiteImageDto();
    }

    public constrcutCriteria(): SiteImageCriteria {
        return new SiteImageCriteria();
    }
}
