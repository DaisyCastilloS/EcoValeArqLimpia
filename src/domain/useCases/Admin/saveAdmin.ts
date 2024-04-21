import { Admin } from '../../entity/AdminInterface';

export interface SaveAdminInterface {
  execute: (AdminToSave: Admin) => Promise<void>
}
