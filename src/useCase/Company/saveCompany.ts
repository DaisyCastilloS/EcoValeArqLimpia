import { RecyclingCompany } from '../../domain/entity/CompanyInterface';
import { RecyclingCompanyRepositoryInterface } from '../../domain/repository/CompanyRepository';
import { SaveRecyclingCompanyInterface } from '../../domain/useCases/Company/saveCompany';

export default class SaveRecyclingCompany implements SaveRecyclingCompanyInterface {
  RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface;

  constructor(RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface) {
    this.RecyclingCompanyRepository = RecyclingCompanyRepository;
  }

  async execute(RecyclingCompanyToSave: RecyclingCompany): Promise<void> {
    const result = await this.RecyclingCompanyRepository.save(RecyclingCompanyToSave);
    return result;
  }
}
