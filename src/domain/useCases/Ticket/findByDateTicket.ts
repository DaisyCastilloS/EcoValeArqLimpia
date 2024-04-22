import { Ticket } from '../../entity/TicketInterface';

export interface FindAllTicketByDateInterface {
  execute: () => Promise<Ticket[] | []>
}
