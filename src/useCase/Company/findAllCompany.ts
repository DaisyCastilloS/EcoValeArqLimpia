import { RecyclingCompany } from '../../domain/entity/CompanyInterface';
import { RecyclingCompanyRepositoryInterface } from '../../domain/repository/CompanyRepository';
import { FindAllRecyclingCompanyInterface } from '../../domain/useCases/Company/findAllCompany';

export default class DeleteRecyclingCompany implements FindAllRecyclingCompanyInterface {
  RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface;

  constructor(RecyclingCompanyRepository: RecyclingCompanyRepositoryInterface) {
    this.RecyclingCompanyRepository = RecyclingCompanyRepository;
  }

  async execute(): Promise<RecyclingCompany[]> {
    const result = await this.RecyclingCompanyRepository.getAll();
    return result;
  }
}
