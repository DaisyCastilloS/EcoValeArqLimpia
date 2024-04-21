import { Store } from '../../entity/StoreInterface';

export interface SaveStoreInterface {
  execute: (StoreToSave: Store) => Promise<void>
}
