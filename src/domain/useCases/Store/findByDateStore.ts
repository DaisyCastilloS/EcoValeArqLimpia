import { Store } from '../../entity/StoreInterface';

export interface FindAllStoreByDateInterface {
  execute: () => Promise<Store[] | []>
}
