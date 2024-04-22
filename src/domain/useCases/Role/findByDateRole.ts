import { Role } from '../../entity/RoleInterface';

export interface FindAllRoleByDateInterface {
  execute: () => Promise<Role[] | []>
}
