import { Role } from '../../entity/RoleInterface';

export interface FindByIdRoleInterface {
  execute: (id: string) => Promise<Role | undefined>
}
