import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {TechnicienDto} from 'src/app/controller/model/collaborateur/Technicien.model';
import {TechnicienCriteria} from 'src/app/controller/criteria/collaborateur/TechnicienCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TechnicienAdminService extends AbstractService<TechnicienDto, TechnicienCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/technicien/');
    }

    public constrcutDto(): TechnicienDto {
        return new TechnicienDto();
    }

    public constrcutCriteria(): TechnicienCriteria {
        return new TechnicienCriteria();
    }
}
