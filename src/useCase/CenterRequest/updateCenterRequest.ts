import { CenterRequest } from '../../domain/entity/CenterRequestInterface';
import { CenterRequestRepositoryInterface } from '../../domain/repository/CenterRequestRepository';
import { UpdateCenterRequestInterface } from '../../domain/useCases/CenterRequest/updateCenterRequest';

export default class SaveCenterRequest implements UpdateCenterRequestInterface {
  centerRequestRepository: CenterRequestRepositoryInterface;

  constructor(centerRequestRepository: CenterRequestRepositoryInterface) {
    this.centerRequestRepository = centerRequestRepository;
  }

  async execute(CenterRequestToUpdate: CenterRequest): Promise<void> {
    const result = await this.centerRequestRepository.updateById(CenterRequestToUpdate.id);
    return result;
  }
}
