import {
  insertAnswer,
  findAnswerByQuestionId,
} from "../repositories/answerRepository";
import { findQuestionById } from "../repositories/questionRepository";
import { createAnswer } from "../types/answerTypes";

async function postAnswer(questionId: number, answerData: createAnswer) {
  await insertAnswer(questionId, {
    ...answerData,
  });
}

async function getAnswersById(questionId: number) {
  const questionInfo = await findQuestionById(questionId);
  const answersInfo = await findAnswerByQuestionId(questionId);

  console.log(questionInfo);
  return {
    questionInfo,
    answers: answersInfo,
  };
}

export { postAnswer, getAnswersById };
