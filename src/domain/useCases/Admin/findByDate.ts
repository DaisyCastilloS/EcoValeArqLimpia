import { Admin } from '../../entity/AdminInterface';

export interface FindAllAdminByDateInterface {
  execute: () => Promise<Admin[] | []>
}
