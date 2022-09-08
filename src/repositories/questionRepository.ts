import prisma from "../database/database";
import { createQuestion } from "../types/questionTypes";

async function insertQuestion(question: createQuestion) {
  await prisma.questions.create({
    data: question,
  });
}

async function findAllQuestions() {
  return await prisma.questions.findMany({});
}

export { insertQuestion, findAllQuestions };
