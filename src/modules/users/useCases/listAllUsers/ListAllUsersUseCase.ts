import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(id: string): User[] {
    const user_adminID = this.usersRepository.findById(id);

    if (!user_adminID) {
      throw new Error("Mensagem do erro");
    }

    if (!user_adminID.admin === true) {
      throw new Error("Mensagem do erro");
    }

    const list = this.usersRepository.list();
    return list;
  }
}
export { ListAllUsersUseCase };
