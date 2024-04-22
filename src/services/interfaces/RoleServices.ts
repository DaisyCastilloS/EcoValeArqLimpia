import { Role } from '../../domain/entity/RoleInterface';

export interface RoleServiceInterface {
  getAll: () => Promise<Role[] | undefined>;
  save(modality: Role): Promise<void>;
  findById(id: string): Promise<Role | undefined>;
  findByName: (name: string) => Promise<Role[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<Role[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<Role[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Roles: Role[]; total: number }>;
}
