import { Ticket } from '../../domain/entity/TicketInterface';
import { TicketRepositoryInterface } from '../../domain/repository/TicketRepository';
import { SaveTicketInterface } from '../../domain/useCases/Ticket/saveTicket';

export default class DeleteRecyclingPoint implements SaveTicketInterface  {
  TicketRepository: TicketRepositoryInterface;

  constructor(TicketRepository: TicketRepositoryInterface) {
    this.TicketRepository = TicketRepository;
  }

  async execute(TicketToSave: Ticket): Promise<void> {
    const result = await this.TicketRepository.save(TicketToSave);
    return result;
  }
}
