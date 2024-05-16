import { Component } from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  providers: [HttpService],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
