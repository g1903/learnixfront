import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editable-table.component.html',
  styleUrls: ['./editable-table.component.css']
})
export class EditableTableComponent {
  headers: string[] = ['Header 1', 'Header 2', 'Header 3'];
  rows: string[][] = [
    ['Row 1 Col 1', 'Row 1 Col 2', 'Row 1 Col 3'],
    ['Row 2 Col 1', 'Row 2 Col 2', 'Row 2 Col 3']
  ];
  edtHeaders: string[] = [];
  edtRows: string[][] = [];
  isEditing: boolean = false;

  openEditor() {
    this.edtHeaders = this.headers.slice();
    this.edtRows = this.rows.map(subArray => subArray.slice());
    this.isEditing = true;
  }

  closeEditor() {
    this.headers = this.edtHeaders.slice();
    this.edtHeaders = [];
    this.rows = this.edtRows.map(subArray => subArray.slice());
    this.edtRows.forEach(subArray => subArray.length = 0);
    this.isEditing = false;
  }

  addRow() {
    const newRow = this.edtHeaders.map(() => '');
    this.edtRows.push(newRow);
  }

  removeRow(index: number) {
    this.edtRows.splice(index, 1);
  }

  addColumn() {
    this.edtHeaders.push('New Header');
    this.edtRows.forEach(row => row.push(''));
  }

  removeColumn(index: number) {
    this.edtHeaders.splice(index, 1);
    this.edtRows.forEach(row => row.splice(index, 1));
  }

  updateHeader(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.edtHeaders[index] = inputElement.value;
  }

  updateCell(rowIndex: number, colIndex: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.edtRows[rowIndex][colIndex] = inputElement.value;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
