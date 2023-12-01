import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {ModeAccesCriteria} from './ModeAccesCriteria.model';
import {TechnicienCriteria} from '../collaborateur/TechnicienCriteria.model';
import {SiteImageCriteria} from './SiteImageCriteria.model';

export class SiteCriteria  extends BaseCriteria  {

    public id: number;
    public g2r: string;
    public g2rLike: string;
    public nom: string;
    public nomLike: string;
    public adresse: string;
    public adresseLike: string;
    public commentaire: string;
    public commentaireLike: string;
  public technicien: TechnicienCriteria ;
  public techniciens: Array<TechnicienCriteria> ;
  public modeAcces: ModeAccesCriteria ;
  public modeAccess: Array<ModeAccesCriteria> ;
      public siteImages: Array<SiteImageCriteria>;

}
