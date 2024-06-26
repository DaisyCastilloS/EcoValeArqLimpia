import { Store } from '../../domain/entity/StoreInterface';
import { StoreRepositoryInterface } from '../../domain/repository/StoreRepository';
import { SaveStoreInterface } from '../../domain/useCases/Store/saveStore';

export default class DeleteRecyclingPoint implements SaveStoreInterface {
  StoreRepository: StoreRepositoryInterface;

  constructor(StoreRepository: StoreRepositoryInterface) {
    this.StoreRepository = StoreRepository;
  }

  async execute(modality: Store): Promise<void> {
    const result = await this.StoreRepository.save(modality);
    return result;
  }
}
