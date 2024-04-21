import { Role } from '../../entity/RoleInterface';

export interface SaveRoleInterface {
  execute: (RoleToSave: Role) => Promise<void>
}
