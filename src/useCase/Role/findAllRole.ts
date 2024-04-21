import { Role } from '../../domain/entity/RoleInterface';
import { RoleRepositoryInterface } from '../../domain/repository/RoleRepository';
import { FindAllRoleInterface } from '../../domain/useCases/Role/findAllRole';

export default class DeleteRecyclingPoint implements FindAllRoleInterface  {
  RoleRepository: RoleRepositoryInterface;

  constructor(RoleRepository: RoleRepositoryInterface) {
    this.RoleRepository = RoleRepository;
  }

  async execute(): Promise<Role[]> {
    const result = await this.RoleRepository.getAll();
    return result;
  }
}