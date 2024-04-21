import { User } from '../../entity/UserInterface';

export interface DeleteUserInterface {
  execute: (UserToDelete: User) => Promise<void>
}
