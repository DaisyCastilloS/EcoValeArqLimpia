import { Role } from '../../entity/RoleInterface';

export interface SaveRoleInterface {
  execute: (role: Role) => Promise<void>
}
