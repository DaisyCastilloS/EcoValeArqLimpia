import { Admin } from '../../entity/AdminInterface';

export interface FindAllAdminInterface {
  execute: () => Promise<Admin[] | undefined>
}
