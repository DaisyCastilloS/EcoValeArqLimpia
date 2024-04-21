import { RecyclingCompany } from '../../domain/entity/CompanyInterface';
import { RecyclingCompanyRepositoryInterface } from '../../domain/repository/CompanyRepository';
import { DeleteRecyclingCompanyInterface } from '../../domain/useCases/Company/deleteCompany';

export default class DeleteRecyclingCompany implements DeleteRecyclingCompanyInterface {
  RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface;

  constructor(RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface) {
    this.RecyclingCompanyRepository = RecyclingCompanyRepository;
  }

  async execute(CompanyToDelete: RecyclingCompany): Promise<void> {
    const result = await this.RecyclingCompanyRepository.deleteById(CompanyToDelete.id);
    return result;
  }
}
