import { Ticket } from '../../domain/entity/TicketInterface';
import { TicketRepositoryInterface } from '../../domain/repository/TicketRepository';
import { UpdateTicketInterface } from '../../domain/useCases/Ticket/updateTicket';

export default class DeleteRecyclingPoint implements UpdateTicketInterface  {
  TicketRepository: TicketRepositoryInterface;

  constructor(TicketRepository: TicketRepositoryInterface) {
    this.TicketRepository = TicketRepository;
  }

  async execute(TicketToUpdate: Ticket): Promise<void> {
    const result = await this.TicketRepository.update(TicketToUpdate);
    return result;
  }
}
