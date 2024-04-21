import { RecyclingCompany } from '../../domain/entity/CompanyInterface';
import { RecyclingCompanyRepositoryInterface } from '../../domain/repository/CompanyRepository';
import { FindByIdRecyclingCompanyInterface } from '../../domain/useCases/Company/findByIdCompany';

export default class DeleteRecyclingCompany implements FindByIdRecyclingCompanyInterface {
  RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface;

  constructor(RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface) {
    this.RecyclingCompanyRepository = RecyclingCompanyRepository;
  }

  async execute(id: string): Promise<RecyclingCompany> {
    const result = await this.RecyclingCompanyRepository.findById(id);
    return result;
  }
}
