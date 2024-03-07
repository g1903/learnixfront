import {Component, Input, input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Lection} from "../../Models/Lection";

@Component({
  selector: 'app-lection',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lection.component.html',
  styleUrl: './lection.component.css'
})
export class LectionComponent {

  protected lection: Lection | undefined;

  constructor() {
    this.generateExampleContent();
  }

  private generateExampleContent():void{
    for (let i = 0; i < 4; i++) {

    }

  }

}
