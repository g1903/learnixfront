export class Lection {
  constructor(
    public lectionId: number,
    public title: string,
    public creatorGuid: string,
    public description: string,
    public topicType: string
  ) {}
}
