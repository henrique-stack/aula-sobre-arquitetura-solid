import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.body;
    const user = this.showUserProfileUseCase.execute({ user_id });

    if (!user) {
      return response.status(404).json({ error: "Message error" });
    }

    return response.status(201).send(user);
  }
}

export { ShowUserProfileController };
