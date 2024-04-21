import { RecyclingCompany } from '../entity/CompanyInterface';
// aqui va el crud
export interface RecyclingCompanyRepositoryInterface {
  // Guarda un objeto RecyclingCompany en el repositorio
  save: (RecyclingCompanyToSave: RecyclingCompany) => Promise<void>

  // Encuentra un objeto RecyclingCompany por su ID
  findById: (id: string) => Promise<RecyclingCompany>

  // Encuentra una lista de RecyclingCompanys por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<RecyclingCompany[]>

  // Actualiza un objeto RecyclingCompany en el repositorio
  update: (RecyclingCompanyToUpdate: RecyclingCompany) => Promise<void>

  // Elimina un objeto RecyclingCompany por su ID
  deleteById: (id: string) => Promise<void>

  // Obtiene todos los RecyclingCompanys en el repositorio
  getAll: () => Promise<RecyclingCompany[]>

  // Obtiene la cantidad total de RecyclingCompanys en el repositorio
  getCount: () => Promise<number>

  // Verifica si existe un RecyclingCompany con el ID dado
  existsById: (id: string) => Promise<boolean>

  // Busca RecyclingCompanys por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<RecyclingCompany[]>

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number
    pageSize: number
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  }) => Promise<{ RecyclingCompanys: RecyclingCompany[], total: number }>

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
