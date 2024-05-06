import { Store } from '../entity/StoreInterface';

export interface StoreRepositoryInterface {

  // Obtiene todos los Stores en el repositorio
  getAll: () => Promise<Store[] | undefined>;

  // Guarda un objeto Store en el repositorio
  save: (modality: Store) => Promise<void>;

  // Encuentra un objeto Store por su ID
  findById: (id: string) => Promise<Store | undefined>;

  // Encuentra una lista de Stores por su nombre (puede devolver una lista vacía)
  findByName: (nombre: string) => Promise<Store[]>;

  findByDate(date: string): Promise<Store[] | []>;

  // Actualiza un objeto Store en el repositorio por su ID
  updateById: (id: string, updatedFields: Partial<Store>) => Promise<any>;

  // Elimina un objeto Store por su ID
  deleteById: (id: string) => Promise<void>;

  // Obtiene la cantidad total de Stores en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un Store con el ID dado

  // Busca Stores por criterios específicos, como filtros avanzados

  // Realiza operaciones avanzadas de paginación y ordenamiento

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
