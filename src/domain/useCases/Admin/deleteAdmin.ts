import { Admin } from '../../entity/AdminInterface';

export interface DeleteAdminInterface {
  execute: (admin: Admin) => Promise<void>
}
