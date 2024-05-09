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
  isEditing: boolean = false;

  openEditor() {
    this.isEditing = true;
  }

  closeEditor() {
    this.isEditing = false;
  }

  addRow() {
    const newRow = this.headers.map(() => '');
    this.rows.push(newRow);
  }

  removeRow(index: number) {
    this.rows.splice(index, 1);
  }

  addColumn() {
    this.headers.push('New Header');
    this.rows.forEach(row => row.push(''));
  }

  removeColumn(index: number) {
    this.headers.splice(index, 1);
    this.rows.forEach(row => row.splice(index, 1));
  }

  updateHeader(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.headers[index] = inputElement.value;
  }

  updateCell(rowIndex: number, colIndex: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.rows[rowIndex][colIndex] = inputElement.value;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
