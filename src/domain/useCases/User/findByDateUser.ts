import { User } from '../../entity/UserInterface';

export interface FindAllUserByDateInterface {
  execute: () => Promise<User[] | []>
}
