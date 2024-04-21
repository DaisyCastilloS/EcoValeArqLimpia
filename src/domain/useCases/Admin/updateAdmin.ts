import { Admin } from '../../entity/AdminInterface';

export interface UpdateAdminInterface {
  execute: (AdminToUpdate: Admin) => Promise<void>
}
