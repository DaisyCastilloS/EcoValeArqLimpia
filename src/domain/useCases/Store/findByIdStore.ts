import { Store } from '../../entity/StoreInterface';

export interface FindByIdStoreInterface {
  execute: (id: string) => Promise<Store | undefined>
}
