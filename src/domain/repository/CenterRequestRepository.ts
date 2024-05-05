import { CenterRequest } from '../entity/CenterRequestInterface';

export interface CenterRequestRepositoryInterface {
  // Obtiene todos los CenterRequests en el repositorio
  getAll: () => Promise<CenterRequest[] | undefined>;

  // Guarda un objeto CenterRequest en el repositorio
  save: (modality: CenterRequest) => Promise<void>;

  // con la id, que devuelva materialarecolectar
  findByIdmaterial(id: string): Promise<{ materialaRecolectar: string; } | undefined>;

  // con la id, que devuelva la ubicaciondel centro de recoleccion
  findByIdubicacion(id: string): Promise<{ ubicacionRecoleccion: string; } | undefined>;

  // Actualiza un objeto CenterRequest en el repositorio por su ID
  updateById: (id: string, newMaterial: string) => Promise<void>;

  // Elimina un objeto CenterRequest por su ID
  deleteById: (id: string) => Promise<void>;

  findByDate(date: string): Promise<CenterRequest[] | []>;

  // Obtiene la cantidad total de CenterRequests en el repositorio
  getCount: () => Promise<number>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ CenterRequests: CenterRequest[]; total: number }>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
