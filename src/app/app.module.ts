import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { FaqChatComponent } from './faq-chat/faq-chat.component';
import { QuestionFormComponent } from './faq-chat/question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqChatComponent,
    QuestionFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChatModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
