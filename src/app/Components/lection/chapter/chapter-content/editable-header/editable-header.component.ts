import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpService} from "../../../../../Services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {ChapterContent} from "../../../../../Models/ChapterContent";

@Component({
  selector: 'app-editable-header',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './editable-header.component.html',
  styleUrls: ['./editable-header.component.css']
})
export class EditableHeaderComponent {
  @Input() originalContent: ChapterContent | undefined;
  @Input() editable: boolean | undefined;
  protected headerText: string = 'Titel 01';
  protected headerLevel: string = 'h1';
  protected edtHeaderText: string = '';
  protected edtHeaderLevel: string = '';
  protected isEditing: boolean = false;


  constructor(private http: HttpService) {
  }

  ngOnInit():void {
    if(this.originalContent !== undefined)
      this.deserializeHeader(this.originalContent.content);
  }

  protected openEditor() {
    if(!this.editable)
      return;
    this.edtHeaderLevel = this.headerLevel;
    this.edtHeaderText = this.headerText;
    this.isEditing = true;
  }

  protected closeEditor(save: boolean) {
    this.isEditing = false;
    if(save){
      this.headerText = this.edtHeaderText;
      this.headerLevel = this.edtHeaderLevel;
    }
  }

  private save():void {

  }

  protected restore(): void {
    if(this.originalContent !== undefined)
      this.deserializeHeader(this.originalContent.content);
  }

  private serializeHeader(): string {
    const escape = (str: string): string => str.replace(/,/g, '%2C').replace(/\|/g, '%7C');
    const serializedText = escape(this.headerText);
    return `${serializedText}|${this.headerLevel}`;
  }

  private deserializeHeader(serializedHeader: string): void {
    const unescape = (str: string): string => str.replace(/%2C/g, ',').replace(/%7C/g, '|');
    const [serializedText, headerLevel] = serializedHeader.split('|');
    this.headerText = unescape(serializedText);
    this.headerLevel = headerLevel;
  }
}
