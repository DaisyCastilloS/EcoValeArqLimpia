import { Store } from '../../domain/entity/StoreInterface';
import { StoreRepositoryInterface } from '../../domain/repository/StoreRepository';
import { DeleteStoreInterface } from '../../domain/useCases/Store/deleteStore';

export default class DeleteRecyclingPoint implements DeleteStoreInterface {
  StoreRepository: StoreRepositoryInterface;

  constructor(StoreRepository: StoreRepositoryInterface) {
    this.StoreRepository = StoreRepository;
  }

  async execute(StoreToDelete: Store): Promise<void> {
    const result = await this.StoreRepository.deleteById(StoreToDelete.id);
    return result;
  }
}
