import * as questionRepository from "../repositories/questionRepository";
import { createQuestion } from "../types/questionTypes";

async function insertQuestion(questionData: createQuestion) {
  await questionRepository.insertQuestion(questionData);
}

async function getAllQuestions() {
  const questionList = await questionRepository.findAllQuestions();
  return questionList;
}

export { insertQuestion, getAllQuestions };
