import { User } from '../../entity/UserInterface';

export interface FindByIdUserInterface {
  execute: (id: string) => Promise<User | undefined>
}
