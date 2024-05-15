import {Component, Input} from '@angular/core';
import {ChapterContent} from "../../../../Models/ChapterContent";
import {EditableHeaderComponent} from "./editable-header/editable-header.component";
import {CommonModule, NgSwitchCase} from "@angular/common";
import {EditableTextComponent} from "./editable-text/editable-text.component";
import {EditableListComponent} from "./editable-list/editable-list.component";
import {EditableTableComponent} from "./editable-table/editable-table.component";

@Component({
  selector: 'app-chapter-content',
  standalone: true,
  imports: [
    CommonModule,
    EditableHeaderComponent,
    NgSwitchCase,
    EditableTextComponent,
    EditableListComponent,
    EditableTableComponent
  ],
  templateUrl: './chapter-content.component.html',
  styleUrl: './chapter-content.component.css'
})
export class ChapterContentComponent {
  @Input() cont: ChapterContent | undefined;
}
