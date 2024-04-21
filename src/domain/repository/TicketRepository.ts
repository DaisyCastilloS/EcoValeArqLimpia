import { Ticket } from '../entity/TicketInterface';

export interface TicketRepositoryInterface {
  // Guarda un objeto Ticket en el repositorio
  save: (ticket: Ticket) => Promise<void>;

  // Encuentra un objeto Ticket por su ID
  findById: (id: string) => Promise<Ticket | undefined>;

  // Encuentra una lista de Tickets por su nombre (puede devolver una lista vacía)
  findByName: (name: string) => Promise<Ticket[]>;

  // Actualiza un objeto Ticket en el repositorio por su ID
  updateById: (id: string) => Promise<void>;

  // Elimina un objeto Ticket por su ID
  deleteById: (id: string) => Promise<void>;

  // Obtiene todos los Tickets en el repositorio
  getAll: () => Promise<Ticket[]>;

  // Obtiene la cantidad total de Tickets en el repositorio
  getCount: () => Promise<number>;

  // Verifica si existe un Ticket con el ID dado
  existsById: (id: string) => Promise<boolean>;

  // Busca Tickets por criterios específicos, como filtros avanzados
  findByCriteria: (criteria: any) => Promise<Ticket[]>;

  // Realiza operaciones avanzadas de paginación y ordenamiento
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Tickets: Ticket[]; total: number }>;

  // Otros métodos del repositorio pueden ser agregados aquí según sea necesario
}
