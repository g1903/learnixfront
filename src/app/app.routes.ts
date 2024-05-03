import { Routes } from '@angular/router';
import {LectionComponent} from "./Components/lection/lection.component";
import {LandingpageComponent} from "./Components/landingpage/landingpage.component";
import {ChapterComponent} from "./Components/lection/chapter/chapter.component";
import {PageNotFoundComponent} from "./Components/page-not-found/page-not-found.component";
import {authGuard} from "./auth.guard";
import {PracticeComponent} from "./Components/practice/practice.component";
import {LessonComponent} from "./Components/practice/lesson/lesson.component";
import {QuizComponent} from "./Components/lection/quiz/quiz.component";
import {IndexCardsComponent} from "./Components/practice/index-cards/index-cards.component";
import {QuizzComponent} from "./Components/practice/quizz/quizz.component";

export const routes: Routes = [
  { path: '', component: LandingpageComponent, canActivate: [authGuard]},
  { path: 'lection/:lectionId', component: LectionComponent, canActivate: [authGuard]},
  { path: 'lection/:lectionId/:chapterId', component: ChapterComponent, canActivate: [authGuard]},
  { path: 'practice', component: PracticeComponent},
  { path: 'lesson', component: LessonComponent},
  { path: 'quizz', component: QuizzComponent},
  { path: 'index-cards', component: IndexCardsComponent},
  { path: '**',component: PageNotFoundComponent},

];
