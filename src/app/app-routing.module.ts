import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormExamComponent} from './form-exam/form-exam.component';
import {MyformComponent} from './myform/myform.component';
import {FormEditorComponent} from './form-editor/form-editor.component';

const routes: Routes = [
  { path: 'formGroup', component: FormExamComponent },
  { path: 'formBuilder', component: FormEditorComponent },
  { path: 'ngForm', component: MyformComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
