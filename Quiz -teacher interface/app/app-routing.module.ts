import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CoursesComponent } from './components/courses/courses.component';
import { HeaderComponent}from './components/header/header.component';
import{EditComponent} from './components/edit/edit.component';
import{QuizComponent} from './components/quiz/quiz.component';
import{ShowQuizComponent} from './components/show-quiz/show-quiz.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component:HeaderComponent },
  {path:'edit',component:EditComponent},
  {path:'quiz',component:QuizComponent},
  {path:'show',component:ShowQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
