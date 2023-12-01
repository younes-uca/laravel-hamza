import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SiteCriteria} from './SiteCriteria.model';

export class SiteImageCriteria  extends BaseCriteria  {

    public id: number;
    public fileName: string;
    public fileNameLike: string;
    public filePath: string;
    public filePathLike: string;
    public description: string;
    public descriptionLike: string;
  public site: SiteCriteria ;
  public sites: Array<SiteCriteria> ;

}
