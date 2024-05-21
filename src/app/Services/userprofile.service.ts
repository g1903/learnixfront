import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import{ Observable} from "rxjs";

@Injectable({
providedIn: 'root'})
export class UserprofileService {
private keycloakBaseUrl: string = 'http://localhost:8080';
private realm: string = 'learnix';
private accessToken: string = ''; // The access token you obtained
constructor(private http: HttpClient) {}
  setAccessToken(token: string) {
  this.accessToken = token;
}
updateProfile(firstName: string, lastName: string): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.accessToken}`    });
  const body = {
    firstName: firstName,
    lastName: lastName
  };

  return this.http.put(`${this.keycloakBaseUrl}/realms/${this.realm}/account`, body, { headers: headers });
}
}
