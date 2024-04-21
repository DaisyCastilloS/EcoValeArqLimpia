import { User } from '../../entity/UserInterface';

export interface FindAllUserInterface {
  execute: (UserToFind: User) => Promise<User[]>
}
