import { Component } from '@angular/core';
import {UserprofileService} from "../../Services/userprofile.service";
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profileeditor.component.html',
  styleUrls: ['./profileeditor.component.css']
})
export class ProfileeditorComponent {
  constructor(private userProfileService: UserprofileService) {}

  updateMyProfile() {
    const newFirstName = 'Your New First Name';
    const newLastName = 'Your New Last Name';
    this.userProfileService.updateProfile(newFirstName, newLastName).subscribe({
      next: (response) => {
        console.log('Profile updated successfully', response);
      },
      error: (error) => {
        console.error('Error updating profile', error);
      }
    });
  }
}
