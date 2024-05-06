import { Role } from '../entity/RoleInterface';

export interface RoleRepositoryInterface {

  // Obtiene todos los Roles en el repositorio
  getAll: () => Promise<Role[] | undefined>;

  // Guarda un objeto Role en el repositorio
  save: (modality: Role) => Promise<void>;

  // Encuentra un objeto Role por su ID
  findById: (id: string) => Promise<Role | undefined>;

  // Encuentra una lista de Roles por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<Role[] | []>;

  // Actualiza un objeto Role en el repositorio por su ID
  updateById: (id: string) => Promise<any>;

  // Elimina un objeto Role por su ID
  deleteById: (id: string) => Promise<void>;

  // Obtiene la cantidad total de Roles en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un Role con el ID dado

  // Busca Roles por criterios específicos, como filtros avanzados

  // Realiza operaciones avanzadas de paginación y ordenamiento

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
