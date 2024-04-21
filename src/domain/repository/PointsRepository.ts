import { RecyclingPoint } from '../entity/PointsInterface';
// aqui va el crud
export interface RecyclingPointRepositoryInterface {
  // Guarda un objeto RecyclingPoint en el repositorio
  save: (RecyclingPointToSave: RecyclingPoint) => Promise<void>

  // Encuentra un objeto RecyclingPoint por su ID
  findById: (id: string) => Promise<RecyclingPoint | undefined>

  // Encuentra una lista de RecyclingPoints por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<RecyclingPoint[]>

  // Actualiza un objeto RecyclingPoint en el repositorio
  update: (RecyclingPointToUpdate: RecyclingPoint) => Promise<void>

  // Elimina un objeto RecyclingPoint por su ID
  deleteById: (id: string) => Promise<void>

  // Obtiene todos los RecyclingPoints en el repositorio
  getAll: () => Promise<RecyclingPoint[]>

  // Obtiene la cantidad total de RecyclingPoints en el repositorio
  getCount: () => Promise<number>

  // Verifica si existe un RecyclingPoint con el ID dado
  existsById: (id: string) => Promise<boolean>

  // Busca RecyclingPoints por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<RecyclingPoint[]>

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number
    pageSize: number
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  }) => Promise<{ RecyclingPoints: RecyclingPoint[], total: number }>

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
