import Joi from "joi";
// import { IAnswerData } from '../types/answerTypes';

// export const answerSchema = Joi.object({
export const answerSchema = Joi.object({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required(),
});
