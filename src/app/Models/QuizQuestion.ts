import {Quiz} from "./Quiz";

export class QuizQuestion {
  constructor(
    public quizQuestionId: number,
    public question: string,
    public content: string,
    public answer: string,
    public quiz: Quiz
  ) {}
}
