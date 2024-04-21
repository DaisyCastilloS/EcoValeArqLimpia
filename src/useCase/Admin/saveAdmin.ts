import { Admin } from '../../domain/entity/AdminInterface';
import { AdminRepositoryInterface } from '../../domain/repository/AdminRepository';
import { SaveAdminInterface } from '../../domain/useCases/Admin/saveAdmin';

export default class SaveAdmin implements SaveAdminInterface {
  AdminRepository: AdminRepositoryInterface;

  constructor(AdminRepository: AdminRepositoryInterface) {
    this.AdminRepository = AdminRepository;
  }

  async execute(admin: Admin): Promise<void> {
    await this.AdminRepository.save(admin);
  }
}
