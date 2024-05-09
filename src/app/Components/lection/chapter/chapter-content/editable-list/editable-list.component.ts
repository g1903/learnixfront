import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editable-list.component.html',
  styleUrls: ['./editable-list.component.css']
})
export class EditableListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  edtItems: string[] = [];
  newItem: string = '';
  isEditing: boolean = false;

  openEditor() {
    this.edtItems = this.items.slice();
    this.isEditing = true;
  }

  closeEditor() {
    this.items = this.edtItems.slice();
    this.isEditing = false;
    this.edtItems = [];
  }

  addItem() {
    if (this.newItem.trim()) {
      this.edtItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.edtItems.splice(index, 1);
  }
}
