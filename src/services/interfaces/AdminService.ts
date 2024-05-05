import { Admin } from '../../domain/entity/AdminInterface';

export interface AdminServiceInterface {
  getAll: () => Promise<Admin[] | undefined>;
  save(modality: Admin): Promise<void>;
  findById(id: string): Promise<Admin | undefined>;
  findByName: (nombre: string) => Promise<Admin[]>;
  updateById: (id: string, updatedFields: Partial<Admin>) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<Admin[] | []>;
  getCount: () => Promise<number>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Admins: Admin[]; total: number }>;
}
