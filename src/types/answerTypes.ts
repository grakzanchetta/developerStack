import * as models from "@prisma/client";

export type createAnswer = Omit<models.Answers, "id" | "questionId">;
