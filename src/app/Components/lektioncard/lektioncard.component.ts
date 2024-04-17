import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Lection} from "../../Models/Lection";
import {RouterLink} from "@angular/router";
import {ProgressChartComponent} from "../lection/progress-chart/progress-chart.component";
import {Observable} from "rxjs";
import {LectionProgress} from "../../Models/LectionProgress";
import {HttpService} from "../../Services/http.service";
import {HttpClientModule} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-lektioncard',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    RouterLink,
    NgIf,
    ProgressChartComponent,
    HttpClientModule
  ],
  providers: [HttpService],
  templateUrl: './lektioncard.component.html',
  styleUrl: './lektioncard.component.css'
})
export class LektioncardComponent {
  @Input() lection: Lection | undefined;
  @Input() add: boolean | undefined;
  @Output() remove = new EventEmitter<Lection>();
  protected lectionProgress: LectionProgress | undefined;

  constructor(private httpService: HttpService, private keycloak: KeycloakService) {
    if(this.add === undefined)
      this.add = false;
  }

  ngOnInit():void{
    if(!this.add)
      this.getProgress();
  }

  private getProgress(){
    const userGUID: string | undefined = this.keycloak.getKeycloakInstance().subject;
    if(userGUID != undefined && this.lection?.lectionId != undefined)
      this.httpService.GetLectionProgress(userGUID, this.lection.lectionId).then((result) => {
        this.lectionProgress = result;
      })
  }

  protected removeLection():void{
    this.remove.emit(this.lection);
  }

}
