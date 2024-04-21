import { Admin } from '../entity/AdminInterface';
// aqui va el crud
export interface AdminRepositoryInterface {
  // Guarda un objeto Admin en el repositorio
  save: (AdminToSave: Admin) => Promise<void>

  // Encuentra un objeto Admin por su ID
  findById: (id: string) => Promise<Admin | undefined>

  // Encuentra una lista de Admins por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<Admin[]>

  // Actualiza un objeto Admin en el repositorio
  update: (AdminToUpdate: Admin) => Promise<void>

  // Elimina un objeto Admin por su ID
  deleteById: (id: string) => Promise<void>

  // Obtiene todos los Admins en el repositorio
  getAll: () => Promise<Admin[]>

  // Obtiene la cantidad total de Admins en el repositorio
  getCount: () => Promise<number>

  // Verifica si existe un Admin con el ID dado
  existsById: (id: string) => Promise<boolean>

  // Busca Admins por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<Admin[]>

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number
    pageSize: number
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  }) => Promise<{ Admins: Admin[], total: number }>

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
