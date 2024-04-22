import { Admin } from '../../domain/entity/AdminInterface';
import { AdminRepositoryInterface } from '../../domain/repository/AdminRepository';
import { DeleteAdminInterface } from '../../domain/useCases/Admin/deleteAdmin';

// la interfaz es un tipo,es un molde
export default class DeleteAdmin implements DeleteAdminInterface {
  AdminRepository: AdminRepositoryInterface;

  constructor(AdminRepository: AdminRepositoryInterface) {
    this.AdminRepository = AdminRepository;
  }

  async execute(AdminToDelete: Admin): Promise<void> {
    const result = await this.AdminRepository.deleteById(AdminToDelete.id);
    return result;
  }
}
