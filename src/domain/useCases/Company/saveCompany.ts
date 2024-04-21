import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface SaveRecyclingCompanyInterface {
  execute: (RecyclingCompanyToSave: RecyclingCompany) => Promise<void>
}
