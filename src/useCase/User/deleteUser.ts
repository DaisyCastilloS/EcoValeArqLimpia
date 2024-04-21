import { User } from '../../domain/entity/UserInterface';
import { UserRepositoryInterface } from '../../domain/repository/UserRepository';
import { DeleteUserInterface } from '../../domain/useCases/User/deleteUser';

export default class DeleteRecyclingPoint implements DeleteUserInterface {
  UserRepository: UserRepositoryInterface;

  constructor(UserRepository: UserRepositoryInterface) {
    this.UserRepository = UserRepository;
  }

  async execute(UserToDelete: User): Promise<void> {
    const result = await this.UserRepository.deleteById(UserToDelete.id);
    return result;
  }
}
