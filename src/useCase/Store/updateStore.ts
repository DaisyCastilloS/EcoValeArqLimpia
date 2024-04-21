import { Store } from '../../domain/entity/StoreInterface';
import { StoreRepositoryInterface } from '../../domain/repository/StoreRepository';
import { UpdateStoreInterface } from '../../domain/useCases/Store/updateStore';

export default class DeleteRecyclingPoint implements UpdateStoreInterface {
  StoreRepository: StoreRepositoryInterface;

  constructor(StoreRepository: StoreRepositoryInterface) {
    this.StoreRepository = StoreRepository;
  }

  async execute(StoreToUpdate: Store): Promise<void> {
    const result = await this.StoreRepository.save(StoreToUpdate);
    return result;
  }
}
