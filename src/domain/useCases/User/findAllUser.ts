import { User } from '../../entity/UserInterface';

export interface FindAllUserInterface {
  execute: (GetAllUsers: User) => Promise<User[] | undefined>
}
