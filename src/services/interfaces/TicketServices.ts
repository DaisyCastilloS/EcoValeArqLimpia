import { Ticket } from '../../domain/entity/TicketInterface';

export interface TicketServiceInterface {
  getAll: () => Promise<Ticket[] | undefined>;
  save(modality: Ticket): Promise<void>;
  findById(id: string): Promise<Ticket | undefined>;
  findByName: (name: string) => Promise<Ticket[]>;
  updateById: (id: string) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  findByDate(date: string): Promise<Ticket[] | []>;
  getCount: () => Promise<number>;
  existsById: (id: string) => Promise<boolean>;
  findByCriteria: (criteria: any) => Promise<Ticket[]>;
  findPaginated: (options: {
    page: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) => Promise<{ Tickets: Ticket[]; total: number }>;
}
