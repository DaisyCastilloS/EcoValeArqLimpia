import { Admin } from '../../entity/AdminInterface';

export interface SaveAdminInterface {
  execute: (admin: Admin) => Promise<void>
}
