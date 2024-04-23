import { CenterRequest } from '../entity/CenterRequestInterface';

export interface CenterRequestRepositoryInterface {
  // Guarda un objeto CenterRequest en el repositorio
  save: (modality: CenterRequest) => Promise<void>;

  // Encuentra un objeto CenterRequest por su ID
  findById: (id: string) => Promise<CenterRequest | undefined>;

  // Actualiza un objeto CenterRequest en el repositorio por su ID
  updateById: (id: string, newMaterial: string) => Promise<void>;

  // Encuentra una lista de CenterRequests por el materialarecolectar (puede devolver una lista vacía)
  findByName: (materialaRecolectar: string) => Promise<CenterRequest[]>;

 

  // Obtiene todos los CenterRequests en el repositorio
  getAll: () => Promise<CenterRequest[] | undefined>;

  findByDate(date: string): Promise<CenterRequest[] | []>;

  // Obtiene la cantidad total de CenterRequests en el repositorio
  getCount: () => Promise<number>;

   // Elimina un objeto CenterRequest por su ID
   deleteById: (id: string) => Promise<void>;
   
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
