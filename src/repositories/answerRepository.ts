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

async function findAnswerByQuestionId(questionId: number) {
  const answerList = await prisma.answers.findMany({
    where: {
      questionId,
    },
  });
  return answerList;
}

export { insertAnswer, findAnswerByQuestionId };
