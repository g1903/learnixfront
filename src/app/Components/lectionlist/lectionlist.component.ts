import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {filter, map, Observable, of} from "rxjs";
import {Lection} from "../../Models/Lection";
import {HttpService} from "../../Services/http.service";
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";
import {LektioncardComponent} from "../lektioncard/lektioncard.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-lectionlist',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    LektioncardComponent,
    HttpClientModule,
    CommonModule
  ],
  providers: [HttpService],
  templateUrl: './lectionlist.component.html',
  styleUrl: './lectionlist.component.css'
})
export class LectionlistComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef | undefined;
  protected lections$: Observable<Lection[]>;

  constructor(private httpService: HttpService) {
    this.lections$ = of([]);
    this.fetchData();
  }

  protected removeLectionFromList(lectionToRemove: Lection): void {
    this.lections$ = this.lections$.pipe(
      map(lections => lections.filter(lection => lection.lectionId !== lectionToRemove.lectionId))
    );
  }

  private fetchData():void{
    this.lections$ = this.httpService.GetLections();
  }
}
