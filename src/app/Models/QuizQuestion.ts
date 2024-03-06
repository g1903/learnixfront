export class QuizQuestion {
  constructor(
    public id: number,
    public type: string,
    public question: string,
    public content: string,
    public answer: string,
    public quizId: number
  ) {}
}
