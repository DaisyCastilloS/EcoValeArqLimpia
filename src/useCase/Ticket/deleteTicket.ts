import { Ticket } from '../../domain/entity/TicketInterface';
import { TicketRepositoryInterface } from '../../domain/repository/TicketRepository';
import { DeleteTicketInterface } from '../../domain/useCases/Ticket/deleteTicket';

export default class DeleteRecyclingPoint implements DeleteTicketInterface  {
  TicketRepository: TicketRepositoryInterface;

  constructor(TicketRepository: TicketRepositoryInterface) {
    this.TicketRepository = TicketRepository;
  }

  async execute(TicketToDelete: Ticket): Promise<void> {
    const result = await this.TicketRepository.deleteById(TicketToDelete.id);
    return result;
  }
}