import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { FaqChatComponent } from './faq-chat/faq-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqChatComponent,
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
