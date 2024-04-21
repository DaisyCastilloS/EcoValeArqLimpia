import { User } from '../../entity/UserInterface';

export interface SaveUserInterface {
  execute: (User: User) => Promise<void>
}
