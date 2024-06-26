import { Voucher } from '../entity/VoucherInterface';

export interface VoucherRepositoryInterface {
  // Obtiene todos los Vouchers en el repositorio
  getAll: () => Promise<Voucher[] | undefined>;

  // Guarda un objeto Voucher en el repositorio
  save: (modality: Voucher) => Promise<void>;

  // Encuentra un objeto Voucher por su ID
  findById: (id: string) => Promise<Voucher | undefined>;

  // Encuentra una lista de Vouchers por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<Voucher[]>;

  // Actualiza un objeto Voucher en el repositorio por su ID
  updateById: (id: string) => Promise<void>;

  // Elimina un objeto Voucher por su ID
  deleteById: (id: string) => Promise<void>;

  findByDate(date: string): Promise<Voucher[] | []>;

  // Obtiene la cantidad total de Vouchers en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un Voucher con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca Vouchers por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<Voucher[]>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Vouchers: Voucher[]; total: number }>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
