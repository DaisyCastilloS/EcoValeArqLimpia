import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface FindByIdRecyclingCompanyInterface {
  execute: (id: string) => Promise<RecyclingCompany>
}
