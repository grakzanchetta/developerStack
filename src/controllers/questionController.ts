import { Request, Response } from "express";
import { insertQuestion, getAllQuestions } from "../services/questionService";
import { postAnswer, getAnswersById } from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;
  const createdQuestion = await insertQuestion(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionId = Number(req.params.id);
  const answer = req.body;

  await postAnswer(questionId, answer);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questionList = await getAllQuestions();
  res.status(201).send(questionList);
}

export async function getById(req: Request, res: Response) {
  const questionId = Number(req.params.id);
  const info = await getAnswersById(questionId);
  res.status(201).send(info);
}
