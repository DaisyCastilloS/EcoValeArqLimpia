import { Admin } from '../../domain/entity/AdminInterface';
import { AdminRepositoryInterface } from '../../domain/repository/AdminRepository';
import { UpdateAdminInterface } from '../../domain/useCases/Admin/updateAdmin';

export default class UpdateAdmin implements UpdateAdminInterface {
  adminRepository: AdminRepositoryInterface;

  constructor(adminRepository: AdminRepositoryInterface) {
    this.adminRepository = adminRepository;
  }

  async execute(AdminToUpdate: Admin): Promise<void> {
    await this.adminRepository.update(AdminToUpdate);
  }
}
