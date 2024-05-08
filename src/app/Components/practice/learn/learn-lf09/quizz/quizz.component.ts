import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  constructor(private router: Router) {
  }

  goBack(){
    this.router.navigate(['/practice']);
  }


}
