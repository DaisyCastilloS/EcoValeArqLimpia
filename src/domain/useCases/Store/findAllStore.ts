import { Store } from '../../entity/StoreInterface';

export interface FindAllStoreInterface {
  execute: (GetAllStores: Store) => Promise<Store[] | undefined>
}
