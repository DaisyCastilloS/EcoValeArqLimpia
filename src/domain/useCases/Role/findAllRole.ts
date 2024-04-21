import { Role } from '../../entity/RoleInterface';

export interface FindAllRoleInterface {
  execute: (GetAllRoles: Role) => Promise<Role[] | undefined>
}
