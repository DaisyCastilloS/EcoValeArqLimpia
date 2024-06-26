import { RecyclingPoint } from '../entity/PointsInterface';

export interface RecyclingPointRepositoryInterface {

  // Obtiene todos los RecyclingPoints en el repositorio
  getAll: () => Promise<RecyclingPoint[] | undefined>;

  // Guarda un objeto RecyclingPoint en el repositorio
  save: (modality: RecyclingPoint) => Promise<void>;

  // Encuentra un objeto RecyclingPoint por su ID
  findById: (id: string) => Promise<RecyclingPoint | undefined>;

  // Encuentra una lista de RecyclingPoints por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<RecyclingPoint[] | []>;

  // Actualiza un objeto RecyclingPoint en el repositorio por su ID
  updateById: (id: string, updatedFields: Partial<RecyclingPoint>) => Promise<any>;

  // Elimina un objeto RecyclingPoint por su ID
  deleteById: (id: string, updatedFields: Partial<RecyclingPoint>) => Promise<void>;

  // Obtiene la cantidad total de RecyclingPoints en el repositorio
  getCount: () => Promise<number>;

  // Busca RecyclingPoints por criterios específicos, como filtros avanzados

  // Realiza operaciones avanzadas de paginación y ordenamiento

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
