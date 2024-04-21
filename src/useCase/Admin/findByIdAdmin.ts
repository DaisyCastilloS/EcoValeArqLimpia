import { Admin } from '../../domain/entity/AdminInterface';
import { AdminRepositoryInterface } from '../../domain/repository/AdminRepository';
import { FindByIdAdminInterface } from '../../domain/useCases/Admin/findByIdAdmin';

export default class FindByIdAdmin implements FindByIdAdminInterface {
  AdminRepository: AdminRepositoryInterface;

  constructor(AdminRepository: AdminRepositoryInterface) {
    this.AdminRepository = AdminRepository;
  }

  // deberia devolver tipo admin
  async execute(id: string): Promise<Admin | undefined> {
    const result = await this.AdminRepository.findById(id);
    return result;
  }
}
