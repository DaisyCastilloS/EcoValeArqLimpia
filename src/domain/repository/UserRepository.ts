import { User } from '../entity/UserInterface';

export interface UserRepositoryInterface {

  // Obtiene todos los Users en el repositorio
  getAll: () => Promise<User[] | undefined>;

  // Guarda un objeto User en el repositorio
  save: (modality: User) => Promise<void>;

  // Encuentra un objeto User por su ID
  findById: (id: string) => Promise<User | undefined>;

  // Encuentra una lista de Users por su nombre (puede devolver una lista vacía)
  findByName(nombre: string): Promise<string[] | []>;

  // a traves del id, podra actualizar email y contraseña
  updateById(id: string, updatedFields: Partial<User>): Promise<void>

  // Elimina un objeto User por su ID
  deleteById: (id: string) => Promise<void>;

  findByDate(date: string): Promise<User[] | []>;

  // Obtiene la cantidad total de Users en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un User con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca Users por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<User[]>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
