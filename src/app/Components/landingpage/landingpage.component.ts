import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Lection} from "../../Models/Lection";
import {HttpService} from "../../Services/http.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {UserprofileService} from "../../Services/userprofile.service";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [HttpService, UserprofileService],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {


  protected firstName : string  | undefined;
  protected lastName : string | undefined;

  constructor(private userProfileService: UserprofileService) {
    this.lastName = this.userProfileService.lastName;
    this.firstName = this.userProfileService.firstName;

  }

  public UpdateProfile() {


    if (typeof this.firstName === "string" && typeof this.lastName === "string" ) {

        this.userProfileService.updateProfile(this.firstName, this.lastName).subscribe({
          next: (response) => {
            console.log('Profile updated successfully', response);
          },
          error: (error) => {
            console.error('Error updating profile', error);
          }
        });

    }
  }
}
