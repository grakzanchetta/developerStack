import prisma from "../database/database";
import { createQuestion } from "../types/questionTypes";

async function insertQuestion(question: createQuestion) {
  await prisma.questions.create({
    data: question,
  });
}

async function findQuestionById(id: number) {
  const question = await prisma.questions.findFirst({
    where: {
      id,
    },
  });
  return question;
}

async function findAllQuestions() {
  return await prisma.questions.findMany({});
}

export { insertQuestion, findAllQuestions, findQuestionById };
