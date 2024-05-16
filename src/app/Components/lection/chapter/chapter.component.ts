import {Component, Input} from '@angular/core';
import {Chapter} from "../../../Models/Chapter";
import {Observable, of} from "rxjs";
import {ChapterContent} from "../../../Models/ChapterContent";
import {HttpService} from "../../../Services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ChapterContentComponent} from "./chapter-content/chapter-content.component";
import {EditableTableComponent} from "./chapter-content/editable-table/editable-table.component";
import {EditableListComponent} from "./chapter-content/editable-list/editable-list.component";
import {EditableTextComponent} from "./chapter-content/editable-text/editable-text.component";
import {EditableHeaderComponent} from "./chapter-content/editable-header/editable-header.component";
import {NewChapterContentComponent} from "./new-chapter-content/new-chapter-content.component";

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe, ChapterContentComponent, CommonModule, EditableTableComponent, EditableListComponent, EditableTextComponent, EditableHeaderComponent, NewChapterContentComponent],
  providers: [HttpService],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input() chapter!: Chapter;
  @Input() editMode!: boolean;
  protected content$: Observable<ChapterContent[]>;

  constructor(private http: HttpService) {
    this.content$ = of([]);
  }

  ngOnInit(): void{
    this.fetchData();
  }

  protected fetchData():void{
    if(this.chapter?.chapterId != undefined)
      this.content$ = this.http.GetChapterContent(this.chapter.chapterId);
  }
}
