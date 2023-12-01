import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';

import {ModeAccesDto} from 'src/app/controller/model/site/ModeAcces.model';
import {ModeAccesCriteria} from 'src/app/controller/criteria/site/ModeAccesCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ModeAccesAdminService extends AbstractService<ModeAccesDto, ModeAccesCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/modeAcces/');
    }

    public constrcutDto(): ModeAccesDto {
        return new ModeAccesDto();
    }

    public constrcutCriteria(): ModeAccesCriteria {
        return new ModeAccesCriteria();
    }
}
