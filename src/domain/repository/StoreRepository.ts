import { Store } from '../entity/StoreInterface';

export interface StoreRepositoryInterface {
  // Guarda un objeto Store en el repositorio
  save: (store: Store) => Promise<void>;

  // Encuentra un objeto Store por su ID
  findById: (id: string) => Promise<Store | undefined>;

  // Encuentra una lista de Stores por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<Store[]>;

  // Actualiza un objeto Store en el repositorio por su ID
  updateById: (id: string) => Promise<void>;

  // Elimina un objeto Store por su ID
  deleteById: (id: string) => Promise<void>;

  // Obtiene todos los Stores en el repositorio
  getAll: () => Promise<Store[]>;

  // Obtiene la cantidad total de Stores en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un Store con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca Stores por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<Store[]>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Stores: Store[]; total: number }>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
