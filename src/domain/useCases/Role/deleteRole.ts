import { Role } from '../../entity/RoleInterface';

export interface DeleteRoleInterface {
  execute: (RoleToDelete: Role) => Promise<void>
}
