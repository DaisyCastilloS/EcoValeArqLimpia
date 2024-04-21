import { Ticket } from '../../entity/TicketInterface';

export interface FindAllTicketInterface {
  execute: (GetAllTickets: Ticket) => Promise<Ticket[] | undefined>
}
