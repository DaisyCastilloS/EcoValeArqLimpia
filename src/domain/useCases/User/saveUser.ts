import { User } from '../../entity/UserInterface';

export interface SaveUserInterface {
  execute: (UserToSave: User) => Promise<void>
}
