import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionFormComponent } from './question-form/question-form.component';
import { FaqChatComponent } from './faq-chat/faq-chat.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent, pathMatch: 'full' },
  { path: 'question-form', component: QuestionFormComponent },
  { path: 'chatbot', component: FaqChatComponent },
]; //
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
