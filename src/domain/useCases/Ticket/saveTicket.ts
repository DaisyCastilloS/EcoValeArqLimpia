import { Ticket } from '../../entity/TicketInterface';

export interface SaveTicketInterface {
  execute: (ticket: Ticket) => Promise<void>
}
