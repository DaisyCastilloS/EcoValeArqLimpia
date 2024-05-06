import { Store } from '../../domain/entity/StoreInterface';

export interface StoreServiceInterface {
  getAll: () => Promise<Store[] | undefined>;
  save(modality: Store): Promise<void>;
  findById(id: string): Promise<Store | undefined>;
  findByName: (nombre: string) => Promise<Store[]>;
  updateById: (id: string, updatedFields: Partial<Store>) => Promise<any>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<Store[] | []>;
  getCount: () => Promise<number>;

}
