import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentType } from "../../../../Models/ConentTypes";
import {ChapterContent} from "../../../../Models/ChapterContent";
import {HttpService} from "../../../../Services/http.service";
import {Chapter} from "../../../../Models/Chapter";
import {EditableHeaderComponent} from "../chapter-content/editable-header/editable-header.component";
import {EditableListComponent} from "../chapter-content/editable-list/editable-list.component";
import {EditableTableComponent} from "../chapter-content/editable-table/editable-table.component";
import {EditableTextComponent} from "../chapter-content/editable-text/editable-text.component"; // Pfad anpassen

@Component({
  selector: 'app-new-chapter-content',
  standalone: true,
  imports: [CommonModule, FormsModule, EditableHeaderComponent, EditableListComponent, EditableTableComponent, EditableTextComponent],
  templateUrl: './new-chapter-content.component.html',
  styleUrls: ['./new-chapter-content.component.css']
})
export class NewChapterContentComponent {
  isDialogOpen: boolean = false;
  selectedType: string = ContentType[ContentType.NONE]; // Enum als String initialisieren
  contentTypes = Object.values(ContentType);
  @Input() chapter: Chapter | undefined;
  @Output() notifyParent: EventEmitter<boolean> = new EventEmitter();
  protected readonly ContentType = ContentType;

  constructor(private http: HttpService) {}
  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  protected addChapterContent() {
    if((Number(this.selectedType) !== ContentType.NONE) && (this.chapter !== undefined)) {
      this.http.CreateChapterContent(new ChapterContent(-1, '', 0, Number(this.selectedType), this.chapter.chapterId)).then(result => {
        this.notifyParent.emit();
      });
      this.closeDialog();
    }
  }


}
