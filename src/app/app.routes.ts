import { Routes } from '@angular/router';
import {TestSiteComponent} from "./test-site/test-site.component";

export const routes: Routes = [
  {path: "", component: TestSiteComponent},
  {path: "1", component: TestSiteComponent},
  {path: "2", component: TestSiteComponent},
  {path: "3", component: TestSiteComponent},
];
