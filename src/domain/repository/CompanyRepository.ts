import { RecyclingCompany } from '../entity/CompanyInterface';

export interface RecyclingCompanyRepositoryInterface {

  // Obtiene todas las empresas en el repositorio
  getAll: () => Promise<RecyclingCompany[] | undefined>;

  // Guarda un objeto empresa en el repositorio
  save: (modality: RecyclingCompany) => Promise<void>;

  // Encuentra un objeto empresa por su ID
  findById: (id: string) => Promise<RecyclingCompany | undefined>;

  // Encuentra una lista de empresas por su nombre (puede devolver una lista vacía)
  findByName: (nombreempresa: string) => Promise<RecyclingCompany[]>;

  // Actualiza un objeto empresa en el repositorio por su ID
  updateById: (id: string) => Promise<void>;

  // Elimina un objeto empresa por su ID
  deleteById: (id: string) => Promise<void>;



  // Obtiene la cantidad total de empresas en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un empresa con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca RecyclingCompanys por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<RecyclingCompany[]>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ RecyclingCompanys: RecyclingCompany[]; total: number }>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
