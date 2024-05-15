import { Component } from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {EditableTableComponent} from "../lection/chapter/chapter-content/editable-table/editable-table.component";
import {EditableHeaderComponent} from "../lection/chapter/chapter-content/editable-header/editable-header.component";
import {EditableListComponent} from "../lection/chapter/chapter-content/editable-list/editable-list.component";
import {EditableTextComponent} from "../lection/chapter/chapter-content/editable-text/editable-text.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, EditableTableComponent, EditableHeaderComponent, EditableListComponent, EditableTextComponent],
  providers: [HttpService],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
