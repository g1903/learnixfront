import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editable-header.component.html',
  styleUrls: ['./editable-header.component.css']
})
export class EditableHeaderComponent {
  headerText: string = 'Titel 01';
  headerLevel: string = 'h1';
  isEditing: boolean = false;

  openEditor() {
    this.isEditing = true;
  }

  closeEditor() {
    this.isEditing = false;
  }
}
