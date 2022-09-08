import * as models from "@prisma/client";

export type createQuestion = Omit<models.Questions, "id">;
