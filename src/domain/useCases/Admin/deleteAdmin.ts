import { Admin } from '../../entity/AdminInterface';

export interface DeleteAdminInterface {
  execute: (AdminToDelete: Admin) => Promise<void>
}
