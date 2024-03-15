import {Component, Input} from '@angular/core';
import {Chapter} from "../../../Models/Chapter";
import { KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-chapter',
  standalone: true,
  imports: [],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.css'
})
export class ChapterComponent {

  @Input() chapter: Chapter | undefined;
  /*protected username: string;
  protected role :string;
  private roles: string[];

  constructor(private keycloak: KeycloakService) {
    this.username = this.keycloak.getUsername();
    this.roles = this.keycloak.getUserRoles();
    this.role = 'null';

    for(let val of this.roles){
      if(this.keycloak.isUserInRole(val)){
        this.role = val;
        break;
      }
    }
  }*/
}
