import {Component, EventEmitter, Input, Output} from '@angular/core';
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
export class EditableTextComponent{
  @Input() originalContent: ChapterContent | undefined;
  @Output() notifyParent: EventEmitter<boolean> = new EventEmitter();
  @Input() editable!: boolean;
  protected text: string = '';
  protected edtText: string = '';
  protected isEditing: boolean = false;


  constructor(private http: HttpService) {}

  ngOnInit():void {
    if(this.originalContent !== undefined){
      if(this.originalContent.content === '')
        this.originalContent.content = 'Neuer Text';
      this.text = this.originalContent.content;
    }
  }

  protected openEditor() {
    if(!this.editable)
      return;
    this.edtText = this.text;
    this.isEditing = true;
  }

  private save():void{
    if(!this.editable)
      return;
    if(this.originalContent !== undefined)
      this.http.SaveChapterContent(this.originalContent, this.text);
  }
  protected closeEditor(save: boolean) {
    if(!this.editable)
      return;
    this.isEditing = false;
    if(save) {
      this.text = this.edtText;
      this.save();
    }
  }

  protected restore(): void {
    if(!this.editable)
      return;
    if(this.originalContent !== undefined) {
      this.edtText = this.originalContent.content;
    }
  }

  protected delete():void{
    if(!this.editable)
      return;
    if(this.originalContent !== undefined)
      this.http.DeleteChapterContent(this.originalContent.chapterContentId).subscribe(e => {
        this.notifyParent.emit();
      });
  }

  protected deserialize(serializedString: string, restore = false): void {
    if(restore)
      this.edtText = serializedString
    else
      this.text = serializedString;
  }

  protected serialize(): string {
    return this.text;
  }
}
