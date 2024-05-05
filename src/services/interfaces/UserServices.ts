import { User } from '../../domain/entity/UserInterface';

export interface UserServiceInterface {
  getAll: () => Promise<User[] | undefined>;
  save(modality: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  findByName(nombre: string): Promise<string[] | []>
  updateById(id: string, updatedFields: Partial<User>): Promise<void>
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<User[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<User[]>;
}
