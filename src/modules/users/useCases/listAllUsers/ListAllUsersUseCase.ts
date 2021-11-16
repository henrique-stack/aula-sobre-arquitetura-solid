import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(user_id: string): User[] {
    const user = this.usersRepository.findById(user_id);
    if (user.id !== user_id) {
      throw new Error("User not found");
    }

    if (!user) {
      throw new Error("User not exists");
    }

    if (user.admin === false) {
      throw new Error("You not is an admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
