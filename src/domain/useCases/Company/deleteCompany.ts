import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface DeleteRecyclingCompanyInterface {
  execute: (CompanyToDelete: RecyclingCompany) => Promise<void>
}
