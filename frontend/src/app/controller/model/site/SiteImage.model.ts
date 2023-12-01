import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SiteDto} from './Site.model';

export class SiteImageDto extends BaseDto{

    public fileName: string;

    public filePath: string;

    public description: string;

    public site: SiteDto ;
    

    constructor() {
        super();

        this.fileName = '';
        this.filePath = '';
        this.description = '';
        this.site = new SiteDto() ;

        }

}
