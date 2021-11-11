import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.create({
      email,
      name,
    });

    if (user.email === email) {
      throw new Error("email already exists");
    }

    return user;
  }
}

export { CreateUserUseCase };
