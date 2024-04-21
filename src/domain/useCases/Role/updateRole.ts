import { Role } from '../../entity/RoleInterface';

export interface UpdateRoleInterface {
  execute: (RoleToUpdate: Role) => Promise<void>
}
