import { User } from '../../entity/UserInterface';

export interface FindAllUserInterface {
  execute: (User: User) => Promise<void>
}
