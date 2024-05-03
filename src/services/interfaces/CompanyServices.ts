import { RecyclingCompany } from '../../domain/entity/CompanyInterface';

export interface RecyclingCompanyServiceInterface {
  getAll: () => Promise<RecyclingCompany[] | undefined>;
  save(modality: RecyclingCompany): Promise<void>;
  findById(id: string): Promise<RecyclingCompany | undefined>;
  findByName: (nombreempresa: string) => Promise<RecyclingCompany[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<RecyclingCompany[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<RecyclingCompany[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ RecyclingCompanys: RecyclingCompany[]; total: number }>;
}
