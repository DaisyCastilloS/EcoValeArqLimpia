import { User } from '../../domain/entity/UserInterface';

export interface UserServiceInterface {
  getAll: () => Promise<User[] | undefined>;
  save(modality: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  findByName: (name: string) => Promise<User[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<User[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<User[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Users: User[]; total: number }>;
}
