import { Role } from '../../domain/entity/RoleInterface';
import { RoleRepositoryInterface } from '../../domain/repository/RoleRepository';
import { FindByIdRoleInterface } from '../../domain/useCases/Role/findByIdRole';

export default class FindByIdRole implements FindByIdRoleInterface  {
  RoleRepository: RoleRepositoryInterface;

  constructor(RoleRepository: RoleRepositoryInterface) {
    this.RoleRepository = RoleRepository;
  }

  async execute(id: string): Promise<Role | undefined> {
    const result = await this.RoleRepository.findById(id);
    return result;
  }
}