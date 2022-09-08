import { insertAnswer } from "../repositories/answerRepository";
import { createAnswer } from "../types/answerTypes";

async function postAnswer(questionId: number, answerData: createAnswer) {
  await insertAnswer(questionId, {
    ...answerData,
  });
}

export { postAnswer };
