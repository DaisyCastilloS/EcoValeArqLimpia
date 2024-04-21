import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface FindAllRecyclingCompanyInterface {
  execute: () => Promise<RecyclingCompany[] | undefined >
}
