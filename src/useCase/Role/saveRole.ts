import { Role } from '../../domain/entity/RoleInterface';
import { RoleRepositoryInterface } from '../../domain/repository/RoleRepository';
import { SaveRoleInterface } from '../../domain/useCases/Role/saveRole';

export default class SaveRole implements SaveRoleInterface  {
  RoleRepository: RoleRepositoryInterface;

  constructor(RoleRepository: RoleRepositoryInterface) {
    this.RoleRepository = RoleRepository;
  }

  async execute(RoleToSave: Role): Promise<void> {
    const result = await this.RoleRepository.save(RoleToSave);
    return result;
  }
}