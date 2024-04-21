import { User } from '../../domain/entity/UserInterface';
import { UserRepositoryInterface } from '../../domain/repository/UserRepository';
import { FindAllUserInterface } from '../../domain/useCases/User/findAllUser';

export default class DeleteRecyclingPoint implements FindAllUserInterface {
  UserRepository: UserRepositoryInterface;

  constructor(UserRepository: UserRepositoryInterface) {
    this.UserRepository = UserRepository;
  }

  async execute(): Promise<User[] | undefined> {
    const result = await this.UserRepository.getAll();
    return result;
  }
}
