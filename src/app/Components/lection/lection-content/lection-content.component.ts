import {Component, Input} from '@angular/core';
import {LectureContent} from "../../../Models/LectionContent";

@Component({
  selector: 'app-lection-content',
  standalone: true,
  imports: [],
  templateUrl: './lection-content.component.html',
  styleUrl: './lection-content.component.css'
})
export class LectionContentComponent {
  @Input() content: LectureContent | undefined;
}
