import { Ticket } from '../../domain/entity/TicketInterface';
import { TicketRepositoryInterface } from '../../domain/repository/TicketRepository';
import { FindByIdTicketInterface } from '../../domain/useCases/Ticket/findByIdTicket';

export default class DeleteRecyclingPoint implements FindByIdTicketInterface  {
  TicketRepository: TicketRepositoryInterface;

  constructor(TicketRepository: TicketRepositoryInterface) {
    this.TicketRepository = TicketRepository;
  }

  async execute(id: string): Promise<Ticket | undefined> {
    const result = await this.TicketRepository.findById(id);
    return result;
  }
}
