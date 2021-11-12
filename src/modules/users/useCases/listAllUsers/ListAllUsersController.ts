import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    const admin = this.listAllUsersUseCase.execute({ user_id });

    if (!admin) {
      throw new Error("you don'ts a user/admin");
    }
    return response.send(admin);
  }
}

export { ListAllUsersController };
