import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface UpdateRecyclingCompanyInterface {
  execute: (RecyclingCompanyToUpdate: RecyclingCompany) => Promise<void>
}
