import { RecyclingCompany } from '../../entity/CompanyInterface';

export interface SaveRecyclingCompanyInterface {
  execute: (recyclingCompany: RecyclingCompany) => Promise<void>
}
