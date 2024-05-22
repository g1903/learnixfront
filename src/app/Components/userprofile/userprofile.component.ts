import {KeycloakService} from "keycloak-angular";
import {HttpService} from "../../Services/http.service";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ImageCroppedEvent, ImageCropperModule} from 'ngx-image-cropper';
import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ImageCropperModule,
    FormsModule,

  ],
  providers: [HttpService],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  private keycloakBaseUrl: string= 'http://localhost:8080';
  private realm: string=  'learnix';
  private accessToken: string= '';


  imageChangedEvent: any = '';
  croppedImage: any = '';
  tempCroppedImage: any = '';

  protected username: string | undefined;
  protected roles: string[] | undefined;
  //protected profilePicture: File = null;
  protected profileName: string | undefined;
  private userId: string | undefined;

  constructor(private keycloak: KeycloakService, private httpService: HttpService) {
    this.username = this.keycloak.getUsername();
    this.roles = this.keycloak.getUserRoles();
    this.profileName = this.username;
  }




  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  onCrop(event: ImageCroppedEvent) {
    this.tempCroppedImage = event.base64;
  }

  applyCroppedImage() {
    this.croppedImage = this.tempCroppedImage;
  }
}
