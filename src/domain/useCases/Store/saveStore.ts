import { Store } from '../../entity/StoreInterface';

export interface SaveStoreInterface {
  execute: (store: Store) => Promise<void>
}
