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
  newItem: string = '';
  isEditing: boolean = false;

  openEditor() {
    this.isEditing = true;
  }

  closeEditor() {
    this.isEditing = false;
  }

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
