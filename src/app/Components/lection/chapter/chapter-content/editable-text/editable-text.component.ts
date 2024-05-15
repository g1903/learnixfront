import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule, NgIf} from "@angular/common";
import {ChapterContent} from "../../../../../Models/ChapterContent";
import {HttpService} from "../../../../../Services/http.service";

@Component({
  selector: 'app-editable-text',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent {
  @Input() originalContent: ChapterContent | undefined;
  protected text: string = 'Lorem ipsum';
  protected edtText: string = '';
  protected isEditing: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit():void {
    if(this.originalContent !== undefined)
      this.text = this.originalContent.content;
  }

  protected openEditor() {
    this.edtText = this.text;
    this.isEditing = true;
  }

  private save():void{
    if(this.originalContent !== undefined)
      this.http.SaveChapterContent(this.originalContent, this.text);
  }
  protected closeEditor(save: boolean) {
    this.isEditing = false;
    if(save) {
      this.text = this.edtText;
    }
  }

  protected restore(): void {
    if(this.originalContent !== undefined) {
      this.text = this.originalContent.content;
      this.edtText = this.text;
    }
  }
}
