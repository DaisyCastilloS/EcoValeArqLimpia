import { Ticket } from '../../entity/TicketInterface';

export interface FindByIdTicketInterface {
  execute: (id: string) => Promise<Ticket | undefined>
}
