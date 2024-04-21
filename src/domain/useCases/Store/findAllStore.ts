import { Store } from '../../entity/StoreInterface';

export interface FindAllStoreInterface {
  execute: (StoreToFind: Store) => Promise<Store[]>
}
