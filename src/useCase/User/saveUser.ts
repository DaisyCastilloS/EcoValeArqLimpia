import { User } from '../../domain/entity/UserInterface';
import { UserRepositoryInterface } from '../../domain/repository/UserRepository';
import { SaveUserInterface } from '../../domain/useCases/User/saveUser';

export default class DeleteRecyclingPoint implements SaveUserInterface {
  UserRepository: UserRepositoryInterface;

  constructor(UserRepository: UserRepositoryInterface) {
    this.UserRepository = UserRepository;
  }

  async execute(user: User): Promise<void> {
    const result = await this.UserRepository.save(user);
    return result;
  }
}
