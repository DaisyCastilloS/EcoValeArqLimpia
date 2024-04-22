import { CenterRequest } from '../entity/CenterRequestInterface';

export interface CenterRequestRepositoryInterface {
  // Guarda un objeto CenterRequest en el repositorio
  save: (modality: CenterRequest) => Promise<void>;

  // Encuentra un objeto CenterRequest por su ID
  findById: (id: string) => Promise<CenterRequest | undefined>;

  // Encuentra una lista de CenterRequests por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<CenterRequest[]>;

  // Actualiza un objeto CenterRequest en el repositorio por su ID
  updateById: (id: string) => Promise<void>;

  // Elimina un objeto CenterRequest por su ID
  deleteById: (id: string) => Promise<void>;

  // Obtiene todos los CenterRequests en el repositorio
  getAll: () => Promise<CenterRequest[] | []>;

  // Obtiene la cantidad total de CenterRequests en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un CenterRequest con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca CenterRequests por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<CenterRequest[]>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ CenterRequests: CenterRequest[]; total: number }>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
