import prisma from "../database/database";
import { createAnswer } from "../types/answerTypes";

async function insertAnswer(questionId: number, answerData: createAnswer) {
  const answerInfo = {
    questionId,
    ...answerData,
  };
  return await prisma.answers.create({
    data: answerInfo,
  });
}

export { insertAnswer };
