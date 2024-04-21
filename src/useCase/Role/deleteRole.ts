import { Role } from '../../domain/entity/RoleInterface';
import { RoleRepositoryInterface } from '../../domain/repository/RoleRepository';
import { DeleteRoleInterface } from '../../domain/useCases/Role/deleteRole';

export default class DeleteRecyclingPoint implements DeleteRoleInterface  {
  RoleRepository: RoleRepositoryInterface;

  constructor(RoleRepository: RoleRepositoryInterface) {
    this.RoleRepository = RoleRepository;
  }

  async execute(RoleToDelete: Role): Promise<void> {
    const result = await this.RoleRepository.deleteById(RoleToDelete.id);
    return result;
  }
}