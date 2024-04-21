import { CenterRequest } from '../../domain/entity/CenterRequestInterface';
import { CenterRequestRepositoryInterface } from '../../domain/repository/CenterRequestRepository';
import { DeleteCenterRequestInterface } from '../../domain/useCases/CenterRequest/deleteCenterRequest';

export default class DeleteCenterRequest implements DeleteCenterRequestInterface {
  CenterRequestRepository: CenterRequestRepositoryInterface;

  constructor(CenterRequestRepository: CenterRequestRepositoryInterface) {
    this.CenterRequestRepository = CenterRequestRepository;
  }

  async execute(CenterRequestToDelete: CenterRequest): Promise<void> {
    const result = await this.CenterRequestRepository.deleteById(CenterRequestToDelete.id);
    return result;
  }
}
