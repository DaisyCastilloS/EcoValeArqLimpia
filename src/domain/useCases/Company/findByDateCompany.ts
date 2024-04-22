import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface FindAllRecyclingCompanyByDateInterface {
  execute: () => Promise<RecyclingCompany[] | []>
}
