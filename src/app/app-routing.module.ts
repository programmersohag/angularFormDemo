import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormExamComponent} from './form-exam/form-exam.component';
import {MyformComponent} from './myform/myform.component';
import {FormEditorComponent} from './form-editor/form-editor.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
  { path: 'formGroup', component: FormExamComponent },
  { path: 'formBuilder', component: FormEditorComponent },
  { path: 'ngForm', component: MyformComponent },
  { path: 'post', component: PostComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
