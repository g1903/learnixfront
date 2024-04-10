import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Lection} from "../../Models/Lection";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-lektioncard',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    RouterLink,
    NgIf
  ],
  templateUrl: './lektioncard.component.html',
  styleUrl: './lektioncard.component.css'
})
export class LektioncardComponent {
  @Input() lection: Lection | undefined;
  @Input() add: boolean | undefined;
  @Output() remove = new EventEmitter<Lection>();

  constructor() {
    if(this.add === undefined)
      this.add = false;
  }

  protected addLection():void{
    if(!this.add)
      return;

    this.remove.emit(this.lection);
  }

}
