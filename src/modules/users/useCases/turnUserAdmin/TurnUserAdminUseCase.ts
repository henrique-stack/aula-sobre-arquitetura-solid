import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const admin = this.usersRepository.findById(user_id);
    this.usersRepository.turnAdmin(admin);

    if (!admin.email) {
      throw new Error("Mensagem do erro");
    }

    return admin;
  }
}

export { TurnUserAdminUseCase };
