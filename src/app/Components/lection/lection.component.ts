import { Component } from '@angular/core';
import {LectureContent} from "../../Models/LectionContent";
import {LectionContentComponent} from "./lection-content/lection-content.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-lection',
  standalone: true,
  imports: [
    LectionContentComponent,
    CommonModule
  ],
  templateUrl: './lection.component.html',
  styleUrl: './lection.component.css'
})
export class LectionComponent {

  //public title: string;
  public content: LectureContent[] = [];

  constructor() {
    this.generateExampleContent();
  }

  private generateExampleContent():void{
    for (let i = 0; i < 4; i++) {
      this.content.push(new LectureContent(i,'Title'+i,'Content'+i,i,'Text',1));
    }

  }

}
