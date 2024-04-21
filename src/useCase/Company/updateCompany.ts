import { RecyclingCompany } from '../../domain/entity/CompanyInterface';
import { RecyclingCompanyRepositoryInterface } from '../../domain/repository/CompanyRepository';
import { UpdateRecyclingCompanyInterface } from '../../domain/useCases/Company/updateCompany';

export default class SaveRecyclingCompany implements UpdateRecyclingCompanyInterface {
  RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface;

  constructor(RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface) {
    this.RecyclingCompanyRepository = RecyclingCompanyRepository;
  }

  async execute(RecyclingCompanyToUpdate: RecyclingCompany): Promise<void> {
    const result = await this.RecyclingCompanyRepository.save(RecyclingCompanyToUpdate);
    return result;
  }
}
