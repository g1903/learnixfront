import {Chapter} from "./Chapter";

export class ChapterContent {
  constructor(
    public chapterContentId: number,
    public content: string,
    public contentOrder: number,
    public contentType: number,
    public chapterId: number
  ) {}
}
