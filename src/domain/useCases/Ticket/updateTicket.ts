import { Ticket } from '../../entity/TicketInterface';

export interface UpdateTicketInterface {
  execute: (TicketToUpdate: Ticket) => Promise<void>
}
