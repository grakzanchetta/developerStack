import prisma from "../database/database";
import { createQuestion } from "../types/questionTypes";

async function insertQuestion(question: createQuestion) {
  await prisma.questions.create({
    data: question,
  });
}

export { insertQuestion };
