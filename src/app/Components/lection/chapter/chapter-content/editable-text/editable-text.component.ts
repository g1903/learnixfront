import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-editable-text',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './editable-text.component.html',
  styleUrls: ['./editable-text.component.css']
})
export class EditableTextComponent {
  text: string = 'Lorem ipsum';
  edtText: string = '';
  isEditing: boolean = false;

  openEditor() {
    this.isEditing = true;
    this.edtText = '';
  }

  closeEditor() {
    this.isEditing = false;
    this.text = this.edtText;
  }
}
