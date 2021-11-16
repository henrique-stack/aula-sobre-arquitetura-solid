import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {       
      const admin = this.listAllUsersUseCase.execute(typeof user_id);

      return response.status(201).send(admin);
    } catch (err) {
      return response.status(400).json({ messge: err.message });
    }
  }
}

export { ListAllUsersController };
