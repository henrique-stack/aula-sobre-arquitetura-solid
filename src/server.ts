import swaggerUI from "swagger-ui-express";

import { app } from ".";
import swaggerFile from "../swagger.json";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.listen(3530, () => console.log("Server is running!: port 3333"));
