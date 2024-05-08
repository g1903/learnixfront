import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index-cards',
  standalone: true,
  imports: [],
  templateUrl: './index-cards.component.html',
  styleUrl: './index-cards.component.css'
})
export class IndexCardsComponent {
  constructor(private router: Router) {
  }

  goBack(){
    this.router.navigate(['/learn-lf09']);
  }

}
