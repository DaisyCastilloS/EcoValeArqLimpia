import { Role } from '../../domain/entity/RoleInterface';
import { RoleRepositoryInterface } from '../../domain/repository/RoleRepository';
import { UpdateRoleInterface } from '../../domain/useCases/Role/updateRole';

export default class SaveRole implements UpdateRoleInterface  {
  RoleRepository: RoleRepositoryInterface;

  constructor(RoleRepository: RoleRepositoryInterface) {
    this.RoleRepository = RoleRepository;
  }

  async execute(RoleToSave: Role): Promise<void> {
    const result = await this.RoleRepository.update(RoleToSave);
    return result;
  }
}