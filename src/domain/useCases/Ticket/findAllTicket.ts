import { Ticket } from '../../entity/TicketInterface';

export interface FindAllTicketInterface {
  execute: (TicketToFind: Ticket) => Promise<Ticket[]>
}
