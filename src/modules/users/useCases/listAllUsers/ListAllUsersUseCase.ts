import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ user_id }: IRequest): User[] {
    const admin = this.usersRepository.findById(user_id);

    if (!admin) {
      throw new Error("User not found");
    }

    if (admin.admin === false) {
      throw new Error("You not is an admin");
    }
    const list = this.usersRepository.list();
    return list;
  }
}

export { ListAllUsersUseCase };
