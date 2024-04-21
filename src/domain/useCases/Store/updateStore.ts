import { Store } from '../../entity/StoreInterface';

export interface UpdateStoreInterface {
  execute: (StoreToUpdate: Store) => Promise<void>
}
