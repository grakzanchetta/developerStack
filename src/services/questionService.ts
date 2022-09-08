import * as questionRepository from "../repositories/questionRepository";
import { createQuestion } from "../types/questionTypes";

async function insertQuestion(questionData: createQuestion) {
  await questionRepository.insertQuestion(questionData);
  return questionData;
}

export { insertQuestion };
