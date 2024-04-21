import { CenterRequest } from '../../domain/entity/CenterRequestInterface';
import { CenterRequestRepositoryInterface } from '../../domain/repository/CenterRequestRepository';
import { FindByIdCenterRequestInterface } from '../../domain/useCases/CenterRequest/findByIdCenterRequest';

export default class FindAllCenterRequest implements FindByIdCenterRequestInterface {
  CenterRequestRepository: CenterRequestRepositoryInterface;

  constructor(CenterRequestRepository: CenterRequestRepositoryInterface) {
    this.CenterRequestRepository = CenterRequestRepository;
  }

  async execute(id: string): Promise<CenterRequest> {
    const result = await this.CenterRequestRepository.findById(id);
    return result;
  }
}
