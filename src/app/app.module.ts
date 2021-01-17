import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { FormExamComponent } from './form-exam/form-exam.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { MyformComponent } from './myform/myform.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FormExamComponent,
    FormEditorComponent,
    MyformComponent,
    PostComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
