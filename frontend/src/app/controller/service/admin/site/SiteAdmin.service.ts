import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {SiteDto} from 'src/app/controller/model/site/Site.model';
import {SiteCriteria} from 'src/app/controller/criteria/site/SiteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SiteAdminService extends AbstractService<SiteDto, SiteCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/site/');
    }

    public constrcutDto(): SiteDto {
        return new SiteDto();
    }

    public constrcutCriteria(): SiteCriteria {
        return new SiteCriteria();
    }
}
