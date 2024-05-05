import { Admin } from '../entity/AdminInterface';

export interface AdminRepositoryInterface {
  // Obtiene todos los Admins en el repositorio
  getAll: () => Promise<Admin[] | undefined>;

  // Guarda un objeto Admin en el repositorio
  save: (modality: Admin) => Promise<void>;

  // Encuentra un objeto Admin por su ID
  findById: (id: string) => Promise<Admin | undefined>;

  // Encuentra una lista de Admins por su nombre (puede devolver una lista vacía)
  findByName: (nombre: string) => Promise<Admin[]>;

  // como es admin, a traves de la id puede actualizar cualquiera de los campos
  // por eso el partial admin
  updateById(id: string, updatedFields: Partial<Admin>): Promise<void>

  // Elimina un objeto Admin por su ID
  deleteById: (id: string) => Promise<void>;

  findByDate(date: string): Promise<Admin[] | []>

  // Obtiene la cantidad total de Admins en el repositorio
  getCount: () => Promise<number>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Admins: Admin[]; total: number }>;
}
