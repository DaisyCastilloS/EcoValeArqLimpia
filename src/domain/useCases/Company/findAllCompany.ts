import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface FindAllRecyclingCompanyInterface {
  execute: (CompanyToFind: RecyclingCompany) => Promise<RecyclingCompany[]>
}
