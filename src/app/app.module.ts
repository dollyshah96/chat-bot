import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { FaqChatComponent } from './faq-chat/faq-chat.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqChatComponent,
    QuestionFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChatModule,
    RouterModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class AppModule { }
