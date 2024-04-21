import { User } from '../../entity/UserInterface';

export interface UpdateUserInterface {
  execute: (UserToUpdate: User) => Promise<void>
}
