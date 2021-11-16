import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    const admin = this.turnUserAdminUseCase.execute({ user_id });

    if (!admin) {
      return response.status(404).json({ error: "Admin not found!" });
    }
    return response.status(201).send(admin);
  }
}

export { TurnUserAdminController };
