import { MaterialRecicled } from '../entity/MaterialInterface';

export interface MaterialRecicledRepositoryInterface {

  // Obtiene todos los MaterialRecicleds en el repositorio
  getAll: () => Promise<MaterialRecicled[] | undefined>;

  // Guarda un objeto MaterialRecicled en el repositorio
  save: (modality: MaterialRecicled) => Promise<void>;

  // Encuentra un objeto MaterialRecicled por su ID
  findById: (id: string) => Promise<MaterialRecicled | undefined>;

  // Encuentra una lista de MaterialRecicleds por su nombre (puede devolver una lista vacía)
  findByName(nombrematerial: string): Promise<MaterialRecicled[] | []> ;

  // Actualiza un objeto MaterialRecicled en el repositorio por su ID
  updateById(id: string, description: string): Promise<void> ;

  // Elimina un objeto MaterialRecicled por su ID
  deleteById: (id: string) => Promise<void>;

  findByDate(date: string): Promise<MaterialRecicled[] | []>;

  // Obtiene la cantidad total de MaterialRecicleds en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un MaterialRecicled con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca MaterialRecicleds por criterios específicos, como filtros avanzados

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
