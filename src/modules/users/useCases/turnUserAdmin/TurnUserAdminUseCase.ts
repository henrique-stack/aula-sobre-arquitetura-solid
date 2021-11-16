import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    this.usersRepository.turnAdmin(user);

    if (!user.email) {
      throw new Error("Not be you admin");
    }

    return user;
  }
}

export { TurnUserAdminUseCase };
