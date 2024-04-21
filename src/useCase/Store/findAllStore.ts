import { Store } from '../../domain/entity/StoreInterface';
import { StoreRepositoryInterface } from '../../domain/repository/StoreRepository';
import { FindAllStoreInterface } from '../../domain/useCases/Store/findAllStore';

export default class DeleteRecyclingPoint implements FindAllStoreInterface  {
  StoreRepository: StoreRepositoryInterface;

  constructor(StoreRepository: StoreRepositoryInterface) {
    this.StoreRepository = StoreRepository;
  }

  async execute(): Promise<Store[]> {
    const result = await this.StoreRepository.getAll();
    return result;
  }
}
