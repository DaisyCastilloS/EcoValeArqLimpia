import { Admin } from '../../entity/AdminInterface';

export interface FindByIdAdminInterface {
  execute: (id: string) => Promise<Admin | undefined>
}
