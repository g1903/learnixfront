import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  constructor(private router: Router) {
  }

  goBack(){
    this.router.navigate(['/learn-lf09']);
  }

}
