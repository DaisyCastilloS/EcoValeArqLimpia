import { Ticket } from '../../entity/TicketInterface';

export interface SaveTicketInterface {
  execute: (TicketToSave: Ticket) => Promise<void>
}
