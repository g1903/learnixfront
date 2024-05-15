import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ChapterContent} from "../../../../../Models/ChapterContent";
import {HttpService} from "../../../../../Services/http.service";

@Component({
  selector: 'app-editable-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent {
  @Input() originalContent: ChapterContent | undefined;
  protected headers: string[] = ['Header 1', 'Header 2', 'Header 3'];
  protected rows: string[][] = [
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3']
  ];
  protected edtHeaders: string[] = [];
  protected edtRows: string[][] = [];
  protected isEditing: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit():void {
    if(this.originalContent !== undefined){
      if(this.originalContent.content === '')
        this.originalContent.content = 'Header 1,Header 2,Header 3| , , ; , , ';

      this.deserializeTable(this.originalContent.content);
    }
  }

  protected openEditor() {
    this.edtHeaders = this.headers.slice();
    this.edtRows = this.rows.map(subArray => subArray.slice());
    this.isEditing = true;
  }

  protected closeEditor(save: boolean) {
    if(save){
      this.headers = this.edtHeaders.slice();
      this.rows = this.edtRows.map(subArray => subArray.slice());
      this.save();
    }
    this.edtHeaders = [];
    this.edtRows.forEach(subArray => subArray.length = 0);
    this.isEditing = false;
  }

  private save():void{
    if(this.originalContent !== undefined)
      this.http.SaveChapterContent(this.originalContent, this.serializeTable());
  }

  protected addRow() {
    const newRow = this.edtHeaders.map(() => '');
    this.edtRows.push(newRow);
  }

  protected removeRow(index: number) {
    this.edtRows.splice(index, 1);
  }

  protected addColumn() {
    this.edtHeaders.push('New Header');
    this.edtRows.forEach(row => row.push(''));
  }

  protected removeColumn(index: number) {
    this.edtHeaders.splice(index, 1);
    this.edtRows.forEach(row => row.splice(index, 1));
  }

  protected updateHeader(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.edtHeaders[index] = inputElement.value;
  }

  protected updateCell(rowIndex: number, colIndex: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.edtRows[rowIndex][colIndex] = inputElement.value;
  }

  protected trackByIndex(index: number, obj: any): any {
    return index;
  }

  protected restore(): void {
    if(this.originalContent !== undefined)
      this.deserializeTable(this.originalContent.content, true);
  }

  private serializeTable(): string {
    const escape = (str: string): string => str.replace(/,/g, '%2C').replace(/\|/g, '%7C');
    const headersString = this.headers.map(escape).join(',');
    const rowsString = this.rows.map(row => row.map(escape).join(',')).join(';');
    return `${headersString}|${rowsString}`;
  }

  private deserializeTable(serializedTable: string, restore=false): void {
    const unescape = (str: string): string => str.replace(/%2C/g, ',').replace(/%7C/g, '|');
    const [headersString, rowsString] = serializedTable.split('|');

    if(restore){
      this.edtHeaders = headersString.split(',').map(unescape);
      this.edtRows = rowsString.split(';').map(row => row.split(',').map(unescape));
    } else {
      this.headers = headersString.split(',').map(unescape);
      this.rows = rowsString.split(';').map(row => row.split(',').map(unescape));
    }
  }
}
