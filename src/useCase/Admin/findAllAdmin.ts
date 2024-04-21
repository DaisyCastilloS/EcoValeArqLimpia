import { Admin } from '../../domain/entity/AdminInterface';
import { AdminRepositoryInterface } from '../../domain/repository/AdminRepository';
import { FindAllAdminInterface } from '../../domain/useCases/Admin/findAllAdmin';

export default class FindAllAdmin implements FindAllAdminInterface {
  AdminRepository: AdminRepositoryInterface;

  constructor(AdminRepository: AdminRepositoryInterface) {
    this.AdminRepository = AdminRepository;
  }

  async execute(): Promise<Admin[] | undefined > {
    const result = await this.AdminRepository.getAll();
    return result;
  }
}
