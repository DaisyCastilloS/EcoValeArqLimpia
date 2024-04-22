import { Admin } from '../entity/AdminInterface';

export interface AdminRepositoryInterface {
  // Guarda un objeto Admin en el repositorio
  save: (admin: Admin) => Promise<void>;

  // Encuentra un objeto Admin por su ID
  findById: (id: string) => Promise<Admin | undefined>;

  findByDate(date: string): Promise<Admin[] | []>
  // Encuentra una lista de Admins por su nombre (puede devolver una lista vacía)
  findByName: (nombre: string) => Promise<Admin[]>;

  // como es admin, a traves de la id puede actualizar cualquiera de los campos
  // por eso el partial admin
  updateById(id: string, updatedFields: Partial<Admin>): Promise<void>

  // Elimina un objeto Admin por su ID
  deleteById: (id: string) => Promise<void>;

  // Obtiene todos los Admins en el repositorio
  getAll: () => Promise<Admin[] | []>;

  // Obtiene la cantidad total de Admins en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un Admin con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca Admins por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<Admin[]>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Admins: Admin[]; total: number }>;
}
