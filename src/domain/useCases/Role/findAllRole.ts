import { Role } from '../../entity/RoleInterface';

export interface FindAllRoleInterface {
  execute: (RoleToFind: Role) => Promise<Role[]>
}
