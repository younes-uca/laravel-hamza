import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ModeAccesDto} from './ModeAcces.model';
import {TechnicienDto} from '../collaborateur/Technicien.model';
import {SiteImageDto} from './SiteImage.model';

export class SiteDto extends BaseDto{

    public g2r: string;

    public nom: string;

    public adresse: string;

    public commentaire: string;

    public technicien: TechnicienDto ;
    public modeAcces: ModeAccesDto ;
     public siteImages: Array<SiteImageDto>;
    

    constructor() {
        super();

        this.g2r = '';
        this.nom = '';
        this.adresse = '';
        this.commentaire = '';
        this.technicien = new TechnicienDto() ;
        this.modeAcces = new ModeAccesDto() ;
        this.siteImages = new Array<SiteImageDto>();

        }

}
