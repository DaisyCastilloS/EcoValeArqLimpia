import { Ticket } from '../../domain/entity/TicketInterface';
import { TicketRepositoryInterface } from '../../domain/repository/TicketRepository';
import { FindAllTicketInterface } from '../../domain/useCases/Ticket/findAllTicket';

export default class DeleteRecyclingPoint implements FindAllTicketInterface {
  TicketRepository: TicketRepositoryInterface;

  constructor(TicketRepository: TicketRepositoryInterface) {
    this.TicketRepository = TicketRepository;
  }

  async execute(): Promise<Ticket[] | undefined> {
    const result = await this.TicketRepository.getAll();
    return result;
  }
}
