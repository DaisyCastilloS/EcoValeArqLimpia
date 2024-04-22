import { CenterRequest } from '../../domain/entity/CenterRequestInterface';

export interface CenterRequestServiceInterface {
  getAll: () => Promise<CenterRequest[] | undefined>;
  save(modality: CenterRequest): Promise<void>;
  findById(id: string): Promise<CenterRequest | undefined>;
  findByName: (name: string) => Promise<CenterRequest[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<CenterRequest[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<CenterRequest[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ CenterRequests: CenterRequest[]; total: number }>;
}
