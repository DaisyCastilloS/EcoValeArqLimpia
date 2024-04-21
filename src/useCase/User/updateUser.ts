import { User } from '../../domain/entity/UserInterface';
import { UserRepositoryInterface } from '../../domain/repository/UserRepository';
import { UpdateUserInterface } from '../../domain/useCases/User/updateUser';

export default class DeleteRecyclingPoint implements UpdateUserInterface {
  UserRepository: UserRepositoryInterface;

  constructor(UserRepository: UserRepositoryInterface) {
    this.UserRepository = UserRepository;
  }

  async execute(UserToUpdate: User): Promise<void> {
    const result = await this.UserRepository.updateById(UserToUpdate.id);
    return result;
  }
}
