import { Store } from '../../domain/entity/StoreInterface';
import { StoreRepositoryInterface } from '../../domain/repository/StoreRepository';
import { FindByIdStoreInterface } from '../../domain/useCases/Store/findByIdStore';

export default class DeleteRecyclingPoint implements FindByIdStoreInterface  {
  StoreRepository: StoreRepositoryInterface;

  constructor(StoreRepository: StoreRepositoryInterface) {
    this.StoreRepository = StoreRepository;
  }

  async execute(id: string): Promise<Store | undefined> {
    const result = await this.StoreRepository.findById(id);
    return result;
  }
}
