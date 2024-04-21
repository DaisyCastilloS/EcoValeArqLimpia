import { User } from '../../domain/entity/UserInterface';
import { UserRepositoryInterface } from '../../domain/repository/UserRepository';
import { FindByIdUserInterface } from '../../domain/useCases/User/findByIdUser';

export default class DeleteRecyclingPoint implements FindByIdUserInterface {
  UserRepository: UserRepositoryInterface;

  constructor(UserRepository: UserRepositoryInterface) {
    this.UserRepository = UserRepository;
  }

  async execute(id: string): Promise<User | undefined> {
    const result = await this.UserRepository.findById(id);
    return result;
  }
}
