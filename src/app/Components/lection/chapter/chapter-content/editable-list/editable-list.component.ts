import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpService} from "../../../../../Services/http.service";
import {ChapterContent} from "../../../../../Models/ChapterContent";

@Component({
  selector: 'app-editable-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.css']
})
export class EditableListComponent {
  @Input() originalContent: ChapterContent | undefined;
  protected items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  protected edtItems: string[] = [];
  protected newItem: string = '';
  protected isEditing: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit():void {
    if(this.originalContent !== undefined) {
      if(this.originalContent.content === '')
        this.originalContent.content = 'Item 1,Item 2,Item 3';

      this.deserializeList(this.originalContent.content);
    }
  }

  protected openEditor() {
    this.edtItems = [...this.items];
    this.isEditing = true;
  }

  protected closeEditor(save: boolean) {
    if (save) {
      this.items = [...this.edtItems];
      this.save();
    }
    this.isEditing = false;
  }

  protected addItem() {
    if (this.newItem.trim()) {
      this.edtItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  private save():void{
    if(this.originalContent !== undefined)
      this.http.SaveChapterContent(this.originalContent, this.serializeList());
  }

  protected removeItem(index: number) {
    this.edtItems.splice(index, 1);
  }

  protected updateItem(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.edtItems[index] = inputElement.value;
  }

  protected trackByIndex(index: number, item: string): any {
    return index;
  }

  protected restore(): void {
    if(this.originalContent !== undefined)
      this.deserializeList(this.originalContent.content, true);
  }

  private serializeList(): string {
    const escape = (str: string): string => str.replace(/,/g, '%2C').replace(/\|/g, '%7C');
    return this.items.map(escape).join(',');
  }

  private deserializeList(serializedList: string, restore = false): void {
    const unescape = (str: string): string => str.replace(/%2C/g, ',').replace(/%7C/g, '|');

    if(restore)
      this.edtItems = serializedList.split(',').map(unescape)
    else
      this.items = serializedList.split(',').map(unescape);
  }
}
