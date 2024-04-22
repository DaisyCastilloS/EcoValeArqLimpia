import { Store } from '../../domain/entity/StoreInterface';

export interface StoreServiceInterface {
  getAll: () => Promise<Store[] | undefined>;
  save(modality: Store): Promise<void>;
  findById(id: string): Promise<Store | undefined>;
  findByName: (name: string) => Promise<Store[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<Store[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<Store[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Stores: Store[]; total: number }>;
}
