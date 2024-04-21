import { Store } from '../../entity/StoreInterface';

export interface DeleteStoreInterface {
  execute: (StoreToDelete: Store) => Promise<void>
}
