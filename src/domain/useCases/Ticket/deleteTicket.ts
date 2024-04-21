import { Ticket } from '../../entity/TicketInterface';

export interface DeleteTicketInterface {
  execute: (TicketToDelete: Ticket) => Promise<void>
}
