import { CenterRequest } from '../../domain/entity/CenterRequestInterface';
import { CenterRequestRepositoryInterface } from '../../domain/repository/CenterRequestRepository';
import { SaveCenterRequestInterface } from '../../domain/useCases/CenterRequest/saveCenterRequest';

export default class SaveCenterRequest implements SaveCenterRequestInterface {
  CenterRequestRepository: CenterRequestRepositoryInterface;

  constructor(centerRequestRepository: CenterRequestRepositoryInterface) {
    this.CenterRequestRepository = centerRequestRepository;
  }

  async execute(centerRequest: CenterRequest): Promise<void> {
    const result = await this.CenterRequestRepository.save(centerRequest);
    return result;
  }
}
