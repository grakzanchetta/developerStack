import { Request, Response } from "express";
import { insertQuestion } from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  const question = req.body;
  const createdQuestion = await insertQuestion(question);
  res.status(201).send(createdQuestion);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
