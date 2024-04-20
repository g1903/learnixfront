import {Component, ElementRef, Input, isDevMode, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild("sidebar") sidebar? : ElementRef;
  @ViewChildren('arrow') arrows?: QueryList<ElementRef> | undefined;
  protected profileName: any;
  protected menuItems: { id: number, name: string, symbol?: string }[] = [
    { "id": 0, "name": "Home", "symbol": "bi-house" },
    { "id": 1, "name": "Lections", "symbol": "bi-book"},
    { "id": 2, "name": "Practice", "symbol": "bi-lightning"},
    { "id": 3, "name": "Statistics", "symbol": "bi-graph-up"}
  ];
  @Input() title?: string;

  constructor(protected keycloak: KeycloakService) {
    if (keycloak.isLoggedIn()) {
      keycloak.loadUserProfile().then(value => this.profileName = value.username);
    }
  }

  ngAfterViewInit() {
    this.arrows?.forEach(arrow => {
      arrow.nativeElement.addEventListener('click', (event : Event) => {
        if (event instanceof MouseEvent) { // Type guard for MouseEvent
          const element = event.target as HTMLElement; // Now safe to access parentElement
          const arrowParent = element.parentElement?.parentElement;
          if (arrowParent) {
            arrowParent.classList.toggle('showMenu');
          } else {
            console.warn('Clicked element does not have a suitable parent element');
          }
        }
      });
    });
  }

  toggleSidebar() {
    this.sidebar?.nativeElement.classList.toggle("close");
  }

  logout() {
    this.keycloak.logout(window.location.origin);

  }

  protected readonly isDevMode = isDevMode;
}
