import { User } from '../../entity/UserInterface';

export interface UpdateUserInterface {
  execute: (User: User) => Promise<void>
}
