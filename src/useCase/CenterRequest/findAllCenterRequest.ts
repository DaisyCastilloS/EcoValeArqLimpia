import { CenterRequest } from '../../domain/entity/CenterRequestInterface';
import { CenterRequestRepositoryInterface } from '../../domain/repository/CenterRequestRepository';
import { FindAllCenterRequestInterface } from '../../domain/useCases/CenterRequest/findAllCenterRequest';

export default class FindAllCenterRequest implements FindAllCenterRequestInterface {
  CenterRequestRepository: CenterRequestRepositoryInterface;

  constructor(CenterRequestRepository: CenterRequestRepositoryInterface) {
    this.CenterRequestRepository = CenterRequestRepository;
  }

  async execute(): Promise<CenterRequest[]> {
    const result = await this.CenterRequestRepository.getAll();
    return result;
  }
}
