import { User } from '../entity/UserInterface';
// aqui va el crud
export interface UserRepositoryInterface {
  // Guarda un objeto User en el repositorio
  save: (User: User) => Promise<void>

  // Encuentra un objeto User por su ID
  findById: (id: string) => Promise<User | undefined>

  // Encuentra una lista de Users por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<User[]>

  // Actualiza un objeto User en el repositorio
  update: (User: User) => Promise<void>

  // Elimina un objeto User por su ID
  deleteById: (id: string) => Promise<void>

  // Obtiene todos los Users en el repositorio
  getAll: () => Promise<User[]>

  // Obtiene la cantidad total de Users en el repositorio
  getCount: () => Promise<number>

  // Verifica si existe un User con el ID dado
  existsById: (id: string) => Promise<boolean>

  // Busca Users por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<User[]>

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number
    pageSize: number
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  }) => Promise<{ Users: User[], total: number }>

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
