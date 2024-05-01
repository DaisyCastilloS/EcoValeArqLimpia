import { Admin } from '../../entity/AdminInterface';

export interface UpdateAdminInterface {
  execute: (id: string, updatedFields: Partial<Admin>) => Promise<void>
}
