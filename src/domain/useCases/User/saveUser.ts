import { User } from '../../entity/UserInterface';

export interface SaveUserInterface {
  execute: (user: User) => Promise<void>
}
