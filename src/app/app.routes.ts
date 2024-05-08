import { Routes } from '@angular/router';
import {LectionComponent} from "./Components/lection/lection.component";
import {LandingpageComponent} from "./Components/landingpage/landingpage.component";
import {ChapterComponent} from "./Components/lection/chapter/chapter.component";
import {PageNotFoundComponent} from "./Components/page-not-found/page-not-found.component";
import {authGuard} from "./auth.guard";
import {PracticeComponent} from "./Components/practice/practice.component";
import {LessonComponent} from "./Components/practice/learn/learn-lf09/lesson/lesson.component";
import {QuizComponent} from "./Components/lection/quiz/quiz.component";
import {IndexCardsComponent} from "./Components/practice/learn/learn-lf09/index-cards/index-cards.component";
import {QuizzComponent} from "./Components/practice/learn/learn-lf09/quizz/quizz.component";
import {LearnCSSComponent} from "./Components/practice/learn/learn-css/learn-css.component";
import {LearnHtmlComponent} from "./Components/practice/learn/learn-html/learn-html.component";
import {LearnJSComponent} from "./Components/practice/learn/learn-js/learn-js.component";
import {LearnLF02Component} from "./Components/practice/learn/learn-lf02/learn-lf02.component";
import {LearnLF09Component} from "./Components/practice/learn/learn-lf09/learn-lf09.component";

export const routes: Routes = [
  { path: '', component: LandingpageComponent, canActivate: [authGuard]},
  { path: 'lection/:lectionId', component: LectionComponent, canActivate: [authGuard]},
  { path: 'lection/:lectionId/:chapterId', component: ChapterComponent, canActivate: [authGuard]},
  { path: 'practice', component: PracticeComponent},
  { path: 'lesson', component: LessonComponent},
  { path: 'quizz', component: QuizzComponent},
  { path: 'index-cards', component: IndexCardsComponent},
  { path: 'learn-css', component: LearnCSSComponent},
  { path: 'learn-html', component: LearnHtmlComponent},
  { path: 'learn-js', component: LearnJSComponent},
  { path: 'learn-lf02', component: LearnLF02Component},
  { path: 'learn-lf09', component: LearnLF09Component},
  { path: '**',component: PageNotFoundComponent},

];
