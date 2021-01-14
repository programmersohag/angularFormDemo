import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FormExamComponent } from './form-exam/form-exam.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { MyformComponent } from './myform/myform.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FormExamComponent,
    FormEditorComponent,
    MyformComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
